import React from 'react'
import NoteContext from '../context/NoteContext'
import {Link} from 'react-router-dom'


class FolderMain extends React.Component{

  static contextType = NoteContext;

render(){
  
  // console.log('testing props',this.props.match.params.folderId)
  //console.log(Data.notes,'test data note')
  const notesForFolder = this.context.notes.filter(note=>
    note.folderId===this.context.match.params.folderId
  )
  //console.log(notesForFolder,'test noteforfolder')
  return(
    <ul>
    {notesForFolder.map(note=>
      <li key={note.id}>
        <Link to={`/note/${note.id}`}>
        <h6>{note.name}</h6>
        </Link>
        <span>Modified {note.modified}</span>
      </li>)}
    </ul>
  )
}
}

export default FolderMain