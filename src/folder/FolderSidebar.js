import React from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from '../contextFolder/notefulContext'

class FolderSidebar extends React.Component{
  static contextType = NotefulContext

  render(){
 
    return(
      <ul>
      {this.context.folders.map(folder=>
      <li key={folder.id}>
      <Link to={`/folder/${folder.id}`}>
      {folder.name}
      </Link>
      </li>
    )}
      <button>Add folder</button>
      </ul>
    )
  }
}

export default FolderSidebar