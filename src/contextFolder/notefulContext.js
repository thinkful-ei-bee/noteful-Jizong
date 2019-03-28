import React from 'react'

const NotefulContext = React.createContext(
  {folders:[],
  notes:[],
  addNotes:()=>{},
  deleteNote:()=>{}
}
)

export default NotefulContext