import React from 'react'

import { HiSparkles } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import axios from "axios"


function note({note , setChanges}) {


  const handeldelete=async ()=>{
    var ask = prompt("please type the title of the note : "+note.title )
    if (ask==note.title){
      await axios.delete('http://localhost:1337/note/'+note._id);
      setChanges(Math.random())
    }
  }
  const handelfav=async ()=>{
    axios({
      method: 'put',
      url: 'http://localhost:1337/note/fav/'+note._id
    }).then(()=>{ 
      console.log("the book has note liked")
      setChanges(Math.random())
    })
  }



  return (
    
    <div className="Note">
        <h2>{note.title}</h2>
        <p className='noteBody'>{note.body}</p>
        {note.isfav && <HiSparkles className='isfavNote' />}
        <p className='noteDate'>{note.Date.slice(0,10)}</p>
        <div className='btns'>
        <button onClick={handelfav}><HiSparkles/></button>
        {/* <button ><HiPencil/></button> */}
        <button onClick={handeldelete}><HiTrash/></button>
        </div>
    </div>
  )
}

export default note