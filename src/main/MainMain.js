import React from 'react'
import NotefulContext from '../contextFolder/notefulContext'
import {Link} from 'react-router-dom'
class MainMain extends React.Component{
  
  static contextType = NotefulContext;
render(){
  console.log(this.context,'test mainmain note')
  return(
    <ul>
    {this.context.notes.map(note=>
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

export default MainMain