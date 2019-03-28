import React from 'react'

class AddFolder extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      folderName:''
    }
  }
  
  handleInput=(e)=>{
    this.setState(e.target.value)
  }
  

  render(){
    console.log(this.state)
    return(
      <form className='add-new-folder-form'>
      <h5>Create a folder</h5>
      
      <label> Name:
      <input id='add-folder' name='add-folder'
      onChange={(e)=>this.handleInput(e)}/>
      </label>
      </form>
    )
  }
}

export default AddFolder