import React ,{ useState } from 'react'
import axios from "axios"

const date = new Date()
function NoteForm({ setNotes ,setChanges, setNoteEditMood ,bookSelected}) {
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")

  const handelCreate=()=>{
    axios({
      method: 'post',
      url: 'http://localhost:1337/note/create',
      data: {
        title:title,
        body:body,
        book:bookSelected,
      }
    }).then(()=>{ 
      console.log("the note has been created")
      setNoteEditMood(false)
      setChanges(Math.random())
    })
  }

  return (
    <div className='NoteForm'>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Note title'></input>
      <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder='Note body'></textarea>
      <button onClick={handelCreate}>Create</button>
      <button style={{background:"#eee",color:"#333"}} onClick={()=>setNoteEditMood(false)}>cansle</button>
    </div>
  )
}

export default NoteForm