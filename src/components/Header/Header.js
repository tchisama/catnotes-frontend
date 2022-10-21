import React from 'react'
import booktop from "../../imgs/topbook.png"
import { HiOutlineTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi";
import { GrLogout } from "react-icons/gr";
import axios from "axios"

const bookColor=["#68B1A8","#E9C46A","#EFA08C","#A78A7F","#6C98B5"]


function Header({bookData,setChanges,bookSelected,setBookSelected}) {

  const handlelogout = ()=>{

    localStorage.setItem("userID","")
    setChanges(Math.random())
  }

  const handeldelete=async ()=>{
    var ask = prompt("please type the title of the book : "+bookData.title )
    if (ask==bookData.title){
      await axios.delete('http://localhost:1337/book/'+bookData._id);
      setChanges(Math.random())
    }
  }
  const handelfav=async ()=>{
    axios({
      method: 'put',
      url: 'http://localhost:1337/book/fav/'+bookData._id
    }).then(()=>{ 
      console.log("the book has been liked")
      setChanges(Math.random())
    })
  }



  return (
    <div className='Header'>
      {
          bookSelected?
          <>
          <button className='GoBackButton' onClick={()=>setBookSelected("")}><HiArrowLeft/></button>
          {/* <div className='bookinfo'>
              <div className='bookviewer' style={{background:bookColor[bookData.color]}}>
                  <img src={booktop}></img>
                  {bookData.isfav && <HiSparkles className='isfavBook' />}
                  <h1>{bookData.title}</h1>
              </div>
              <div className='bookright'>
                  <h4>description</h4>
                  <p>
                  description of the bookk
                  </p>
                  <button onClick={handelfav}> <HiSparkles/> add to favorites</button>
                  <button onClick={handeldelete}> <HiOutlineTrash/> delete</button>
              </div>
          </div> */}
          </>
          :
          <>
          <h1>Notebooks</h1>
          <button className='logout' onClick={handlelogout}><GrLogout/> logout</button>
          </>
      }
    </div>
  )
}

export default Header