import React from 'react'

const NoteContext = React.createContext ({

    folders: [],
    notes: [],
    deleteNote: () => {},
    addNote: () => {},
    addFolder: () => {},
})

export default NoteContext