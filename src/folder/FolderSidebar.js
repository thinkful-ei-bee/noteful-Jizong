import React from 'react'
import {Link} from 'react-router-dom'
class FolderSidebar extends React.Component{
  render(){
 
    return(
      <ul>
      {this.props.data.folders.map(folder=>
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

export default FolderSidebar