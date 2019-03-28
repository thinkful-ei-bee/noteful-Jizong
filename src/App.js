import React, { Component } from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import NoteContext from './context/NoteContext'
import MainSidebar from './main/MainSidebar'
import FolderMain from './folder/FolderMain'
import MainMain from './main/MainMain'
import Note from './note/Note'
import FolderSidebar from './folder/FolderSidebar';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      folders:[],
      notes:[]
    }

  }
  
  componentDidMount() {
    Promise.all ([
      fetch (`http://localhost:9090/notes`),
      fetch (`http://localhost:9090/folders`)])
    .then(([notesResponse, foldersResponse]) => {
      if (!notesResponse.ok){
        throw new Error (notesResponse.status)
      }
      if (!foldersResponse.ok){
        throw new Error (foldersResponse)
      }
      return Promise.all([notesResponse.json(), foldersResponse.json()])
    })
    .then (arrOfJsonRes => {
      console.log(arrOfJsonRes)
      this.setState({
        notes: arrOfJsonRes[0],
        folders: arrOfJsonRes[1], 
      })
    })
    .catch(err => console.log(err));
  }
  
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      // deleteNote: this.deleteNote,
      // addFolder: this.addFolder,
      // addNote: this.addNote
    }
    console.log(this.state)

    return (
      <NoteContext.Provider value={contextValue}> 
      <div className="App">
        <header>
          <Link to='/'>
          <h1>Noteful</h1>
          </Link>
        </header>
        <nav>
        <Route 
          exact 
          path='/' 
          component={MainSidebar}
          />
        <Route path='/folder' 
          component={FolderSidebar}
        />
        </nav>
        
        <main>
        <Route exact path='/' 
          component={MainMain} 
          />
          
        <Route path='/folder/:folderId' 
          component={FolderMain} 
        />

      <Route path='/note/:noteId' 
          component={Note} 
          />  
        </main>
      </div>
      </NoteContext.Provider>
    );
  }
}

export default App;
