import React from 'react'
import Data from '../data/Data'
import {Link} from 'react-router-dom'
class FolderMain extends React.Component{
render(){
  
  //console.log('testing props',this.props.match.params.folderId)
  //console.log(Data.notes,'test data note')
  const notesForFolder = Data.notes.filter(note=>
    note.folderId===this.props.match.params.folderId
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