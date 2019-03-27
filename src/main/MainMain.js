import React from 'react'

import {Link} from 'react-router-dom'
class MainMain extends React.Component{
render(){
  console.log(this.props.data,'test mainmain note')
  return(
    <ul>
    {this.props.data.notes.map(note=>
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