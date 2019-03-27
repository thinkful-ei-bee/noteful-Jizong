import React from 'react'
import Data from '../data/Data'
import {Link} from 'react-router-dom'
class MainMain extends React.Component{
render(){
  return(
    <ul>
    {Data.notes.map(note=>
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