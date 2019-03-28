import React from 'react'
import {Link} from 'react-router-dom'
import NoteContext from '../context/NoteContext'


class MainSidebar extends React.Component{

  static contextType = NoteContext;

  render(){
    console.log(this.context,'test routeprop')
    return(
      <ul>
      {this.context.folders.map(folder=>
      <li key={folder.id}>
      <Link to={`/folder/${folder.id}`}>
      {folder.name}
      </Link>
      </li>
    )}
      </ul>
    )
  }
}

export default MainSidebar