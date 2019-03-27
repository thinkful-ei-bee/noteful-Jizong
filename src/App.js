import React, { Component } from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import Data from './data/Data'
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
    setTimeout(() => this.setState(Data), 600)

  }
  
  render() {
    console.log(this.state)
    const value={
      folders:this.state.folders,
      notes:this.state.notes
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
