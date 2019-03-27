import React from 'react'
import NotefulContext from '../contextFolder/notefulContext'
import {Link} from 'react-router-dom'
class MainSidebar extends React.Component{
  static contextType = NotefulContext;
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