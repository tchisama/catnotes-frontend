import React from 'react'
import Book from "./Book"
import {useState} from "react"
import BookForm from '../Form/BookForm'
import { HiPlus } from "react-icons/hi";


function Books({ userID ,sertBooks, setChanges , books , setBookSelected , setBookData }) {
    const [editBookMood,setEditBookMood]=useState(false)
  return (
    <div className='Books'>
        {!editBookMood? 
        <button onClick={()=>setEditBookMood(true)}><HiPlus/></button> 
        : 
        <BookForm setChanges={setChanges} userID={userID} setBooks={sertBooks} setEditBookMood={setEditBookMood}/>} 
    {
        books.length!=0 ? books.map((book,key)=>{ return (
            <Book 
                key={key}
                book={book}    
                setChanges={setChanges}
                setBookSelected={setBookSelected}
                setBookData={setBookData}
            />
        )}) : ''
    }
    </div>
  )
}

export default Books