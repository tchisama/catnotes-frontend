import React ,{useState} from 'react'
import axios from "axios"
import { HiArrowLeft } from "react-icons/hi";



function Signin({setChanges , setLogstate}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleclick=async()=>{
        axios({
            method: 'post',
            url: 'http://localhost:1337/user',
            data:{
                email:email,
                password:password
            }
          })
            .then(function (response) {
                console.log(response.data,typeof(response.data))
              if (response.data) {
                localStorage.setItem('userID',response.data._id)
                console.log(response.data)
                setChanges(Math.random())
              }else{
                alert('the password or the email is not correct')
              }
        });

    }

  return (
    <section >
        <button className='GoBackButtonlog' onClick={()=>setLogstate("welcome")}><HiArrowLeft/></button>
        <label>username or email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' type={"text"}></input>
        <label>password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' type={"password"}></input>
        <button onClick={handleclick}>Sign in</button>
    </section>
  )
}

export default Signin