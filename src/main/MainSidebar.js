import React from 'react'
import Data from '../data/Data'
import {Link} from 'react-router-dom'
class MainSidebar extends React.Component{
  render(){
 
    return(
      <ul>
      {Data.folders.map(folder=>
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