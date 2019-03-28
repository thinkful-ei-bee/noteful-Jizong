import React from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from '../contextFolder/notefulContext'


function deleteNoteRquest(noteId,callback){
  fetch(`http://localhost:9090/notes/${noteId}`,{
    method: 'DELETE',
  headers: {
    'content-type': 'application/json'}
  }).then(res=>{
    if(!res.ok){
      return res.json().then(error=>
        {
          throw error
        })
    }
    return res.json()

  }).then(()=>{
    callback(noteId)
  }).catch(error=>{
    console.log(error)
  })
}

class FolderMain extends React.Component{
  
  static contextType = NotefulContext;
render(){
  
  //console.log('testing props',this.props.match.params.folderId)
  //console.log(Data.notes,'test data note')
  const notesForFolder = this.context.notes.filter(note=>
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
        <button 
        className ='note-delete'
        onClick ={()=>{
          deleteNoteRquest(
            note.id,this.context.deleteNote
          )
        }}
        >Remove</button>
      </li>)}
      <button>Add note</button>
    </ul>
  )
}
}

export default FolderMain