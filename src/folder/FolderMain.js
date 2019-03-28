import React from 'react'
import NoteContext from '../context/NoteContext'
import Note from '../note/Note'


class FolderMain extends React.Component{

  static contextType = NoteContext;

render(){
  console.log([])
  // console.log('testing props',this.props.match.params.folderId)
  //console.log(Data.notes,'test data note')
  // const notesForFolder = this.context.notes.find(note=>
  //   note.folderId===this.context.match.params.folderId
  // )
  //console.log(notesForFolder,'test noteforfolder')
  return(
    
  <ul>
    {/* {notesForFolder.map(note=> {
      return <li key={note.id}>
        <Note 
        id={note.id}
        name={note.name}
        modifified={note.modified}
        />
      </li>}
    )} */}
      </ul>

  )}
    
    }  
export default FolderMain