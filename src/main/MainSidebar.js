import React from 'react'

import {Link} from 'react-router-dom'
class MainSidebar extends React.Component{
  render(){
    console.log(this.props.data,'test routeprop')
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

export default MainSidebar