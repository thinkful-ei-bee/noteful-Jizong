import React from 'react'
import {Link} from 'react-router-dom'
import Data from '../data/Data'

class Note extends React.Component{
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
        <button type='button'>Delete</button>
        <Link to={`/folder/${noteForRender[0].folderId}`}>
          Return
        </Link>
      </div>

    )
  }
}

export default Note