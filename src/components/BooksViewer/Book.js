import React,{useState} from 'react'
import TopBook from "../../imgs/topbook.png"
import axios from "axios"

import { HiSparkles } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { HiOutlineExternalLink } from "react-icons/hi";

const bookColor=["#68B1A8","#E9C46A","#EFA08C","#A78A7F","#6C98B5"]
function Book({book , setBookSelected , setBookData ,setChanges}) {
  const handeldelete=async ()=>{
    var ask = prompt("please type the title of the book : "+book.title )
    if (ask==book.title){
      await axios.delete('http://localhost:1337/book/'+book._id);
      setChanges(Math.random())
    }
  }
  const handelfav=async ()=>{
    axios({
      method: 'put',
      url: 'http://localhost:1337/book/fav/'+book._id
    }).then(()=>{ 
      console.log("the book has been liked")
      setChanges(Math.random())
    })
  }
  return (
    <div className='Book' style={{background:bookColor[book.color]}}>
        <img src={TopBook}></img>
        {book.isfav && <HiSparkles className='isfavBook' />}
        <h2 className=''>{book.title}</h2>
        <p className='bookDate'>{book.Date.slice(0,10)}</p>
        <div className='btns'>
        <button  onClick={()=>{setBookData(book);setBookSelected(book._id)}} ><HiOutlineExternalLink/></button>
        <button  onClick={handelfav} ><HiSparkles/></button>
        <button onClick={handeldelete}><HiTrash/></button>
        </div>
    </div>
  )
}

export default Book