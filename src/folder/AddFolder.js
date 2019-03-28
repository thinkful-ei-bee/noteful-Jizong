import React from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from '../contextFolder/notefulContext';

// note:
// need to validate folder name with no repeat 

class AddFolder extends React.Component{
  static contextType = NotefulContext
  constructor(props){
    super(props)
    this.state={
      name:''
    }
  }
  
  handleInput=(e)=>{
    this.setState({name:e.target.value})
  }
  
  addFolderRequest=()=>{
    
  }

  formSubmithandle=(e)=>{

    e.preventDefault()
    console.log(this.state,'test state in submit handle')
    fetch(`http://localhost:9090/folders`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body:JSON.stringify(this.state)
}).then(res=>{
  if(!res.ok){
    return res.json().then(error=>{throw new Error(error)})
  }
  return res.json()
}).then(
  (data)=>{
    console.log('added test',data)
    this.context.addFolder(data)
    this.props.history.push('/')
  }
)
  }

  render(){
    console.log(this.state)
    return(
      <div className='add-new-folder-container'>
        <form className='add-new-folder-form'
        onSubmit={(e)=>this.formSubmithandle(e)}>
        <h5>Create a folder</h5>
      
        <label> Name:
        <input id='add-folder' name='add-folder'
          onChange={(e)=>this.handleInput(e)}/>
        </label>
          <button type="submit">Submit</button>
        </form>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default AddFolder