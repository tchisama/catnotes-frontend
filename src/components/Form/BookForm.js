import React ,{useState} from 'react'
import axios from "axios"


const bookColor=["#68B1A8","#E9C46A","#EFA08C","#A78A7F","#6C98B5"]
const date = new Date()


function BookForm({ setChanges,userID,setBooks,setEditBookMood}) {
  const [colorSelected,setColorSelected]=useState("#68B1A8");
  const [title,setTitle]=useState('')


  const handelCreate = ()=>{
    axios({
      method: 'post',
      url: 'http://localhost:1337/book/create',
      data: {
        title:title,
        color:bookColor.indexOf(colorSelected),
        owner:userID,
      }
    }).then(()=>{ 
      console.log("the book has been created")
      setEditBookMood(false)
      setChanges(Math.random())
    })
  }



  return (
    <div className='BookForm' >
      <p>Title</p>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='book title'></input>
      <p>Color</p>
      <div className='chooseColor'>
          {
            bookColor.map((color,key)=>{
              return <button 
                key={key}
                style={{background:color, border: colorSelected==color? "2px solid #666":"0"}}
                onClick={()=>setColorSelected(color)}
                ></button>
            })
          }
          
      </div>
      <button 
        onClick={handelCreate}
      >Create</button>
      <button style={{background:"#eee",color:"#333"}} onClick={()=>setEditBookMood(false)}>cansle</button>
    </div>
  )
}

export default BookForm