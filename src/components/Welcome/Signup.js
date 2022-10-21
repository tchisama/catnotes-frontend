import React , {useState} from 'react'
import axios from "axios"
import { HiArrowLeft } from "react-icons/hi";

function Signup({setChanges , setLogstate}) {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [conpassword,setConpassword]=useState("")
  const handleclick=()=>{
    if(password==conpassword){
      axios({
        method: 'post',
        url: 'http://localhost:1337/user/create',
        data:{
            email:email,
            password:password,
            username:username
        }
      })
        .then(function (response) {
            console.log(response.data,typeof(response.data))
          if (response.data) {
            localStorage.setItem('userID',response.data._id)
            console.log(response.data)
            setChanges(Math.random())
          }else{
            alert('this username or this email is already signin')
          }
    });

    }else{
      alert("the password is not the same with the confirm password")
    }


  }
  return (
    <section >
        <button className='GoBackButtonlog' onClick={()=>setLogstate("welcome")}><HiArrowLeft/></button>
        <label>username</label>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' type={"text"}></input>
        <label>email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' type={"text"}></input>
        <label>password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' type={"password"}></input>
        <label>confirm password</label>
        <input value={conpassword} onChange={(e)=>setConpassword(e.target.value)} placeholder='confirm password' type={"password"}></input>
        <button onClick={handleclick}>Sign in</button>
    </section>
  )
}

export default Signup