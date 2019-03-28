import React, { Component } from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import MainSidebar from './main/MainSidebar'
import FolderMain from './folder/FolderMain'
import MainMain from './main/MainMain'
import Note from './note/Note'
import FolderSidebar from './folder/FolderSidebar';
import NotefulContext from './contextFolder/notefulContext'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      folders:[],
      notes:[]
    }

  }
  
  
  
  componentDidMount(){
    
    fetch('http://localhost:9090/folders').then(
      res=>{
        if(!res.ok){
          return res.json().then(
            err=> {throw new Error(err)}
          )
        }
        return res.json()
      }
    ).then(folders=>{
      this.setState({folders:folders})
    }).catch(err=>console.log(err));
    fetch('http://localhost:9090/notes').then(
      res=>{
        if(!res.ok){
          return res.json().then(
            err=> {throw new Error(err)}
          )
        }
        return res.json()
      }
    ).then(notes=>{
      this.setState({notes:notes})
    }).catch(err=>console.log(err))
  }
  deleteNote = noteId =>{
    console.log(this.notes,'test this.note')
    const newNotes = this.state.notes.filter(
      note=>note.id !==noteId
    )

    this.setState({
      notes:newNotes
    })
  }
  render() {
    console.log(this.state,'test state data')
    const value={
      folders:this.state.folders,
      notes:this.state.notes,
      deleteNote:this.deleteNote
    }
    return (
      <NotefulContext.Provider value={value}>

      <div className="App">
        <header>
          <Link to='/'>
          <h1>Noteful</h1>
          </Link>
        </header>
        <nav>
        <Route exact path='/' 
        component={MainSidebar}/>
     
        <Route path='/folder' 
         component={FolderSidebar}/>
     
       
        </nav>
        
        <main>
        <Route exact path='/' 
         component={MainMain}/>
        
          <Route path='/folder/:folderId' 
         component={FolderMain}/>
      

      <Route path='/note/:noteId' 
         component={Note}/>
      
      
          
          
        </main>
      </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
