import React from 'react'
import Note from "./Note"
import {useState , useEffect} from "react"
import NoteForm from '../Form/NoteForm'
import { HiPlus } from "react-icons/hi";
import axios from 'axios';
function Notes({ bookSelected,setChanges,changes}) {
    const [NoteEditMood,setNoteEditMood]=useState(false)
    const [notes,setNotes]=useState('')
    function ref(){
      axios({
        method: 'get',
        url: 'http://localhost:1337/note/notes/'+bookSelected,
        responseType: 'stream'
      })
        .then(function (response) {
          setNotes(JSON.parse(response.data))
        });
        
        
      }
  
    useEffect(() => {
      ref()
    }, [changes])



  return (
    <>
    <div className='Notes'>
    {
    !NoteEditMood? 
    <button onClick={()=>setNoteEditMood(true)}><HiPlus/></button>
     : 
    <NoteForm setChanges={setChanges} bookSelected={bookSelected} setNotes={setNotes} setNoteEditMood={setNoteEditMood}/>} 

        {
            notes.length!=0 ? notes.map((note,key)=>{ return (
                   <Note setChanges={setChanges} key={key} note={note} />
            )}) : ''
        }
    </div>
    </>
  )
}

export default Notes