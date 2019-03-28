import React from 'react'
import {Link} from 'react-router-dom'
import NoteContext from '../context/NoteContext'
import Data from '../data/Data'

export default class Note extends React.Component{

  static contextType = NoteContext;

  deleteNoteRequest = (noteId, callback) => {
    let self = this;
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {
        self.props.history.push('/');
        callback(noteId);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render(){
    const noteForRender = Data.notes.filter(note=>
      note.id ===this.props.match.params.noteId)
    console.log(noteForRender,'test note for render')
    return(
      <div className='note'>
      <ul>
        <li key={noteForRender[0].id}>
        <Link to={`/note/${noteForRender[0].id}`}>
        <h6>{noteForRender[0].name}</h6>
        </Link>
        <span>Modified {noteForRender[0].modified}</span>
      </li>
      </ul>
        {noteForRender[0].content}
        <button onClick={() => 
          this.deleteNoteRequest(this.props.id, this.context.deleteNote)
          }>Delete
        </button>
        
        <Link to={`/folder/${noteForRender[0].folderId}`}>
          Return
        </Link>
      </div>

    )
  }
}