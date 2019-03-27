import React, { Component } from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import Data from './data/Data'
import MainSidebar from './main/MainSidebar'
import FolderMain from './folder/FolderMain'
import MainMain from './main/MainMain'
import Note from './note/Note'
import FolderSidebar from './folder/FolderSidebar';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      folders:[],
      notes:[]
    }

  }
  
  
  
  componentDidMount(){
    setTimeout(() => this.setState(Data), 600)

  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header>
          <Link to='/'>
          <h1>Noteful</h1>
          </Link>
        </header>
        <nav>
        <Route exact path='/' 
        render={routeProps=>{
          const data=this.state
          return (<MainSidebar data={data} {...routeProps}/>)
        }
      }/>
        <Route path='/folder' 
        render={routeProps=>{
          const data=this.state
          return (<FolderSidebar data={data} {...routeProps}/>)
        }
      }/>
       
        </nav>
        
        <main>
        <Route exact path='/' 
        render={routeProps=>{
          const data=this.state
          return (<MainMain data={data} {...routeProps}/>)
        }
      }/>
          <Route path='/folder/:folderId' 
        render={routeProps=>{
          const data=this.state
          return (<FolderMain data={data} {...routeProps}/>)
        }
      }/>

      <Route path='/note/:noteId' 
        render={routeProps=>{
          const data=this.state
          return (<Note data={data} {...routeProps}/>)
        }
      }/>
          
          
        </main>
      </div>
    );
  }
}

export default App;
