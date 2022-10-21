import React ,{useState} from 'react'
import Signin from './Signin'
import Signup from './Signup'

function Welcome({setChanges}) {
    const [logstate,setLogstate]=useState("welcome")
  return (
    <div className='welcomepage'>
    {
        logstate=="welcome"?
        <section >
            <h1>hey , Welcome to cat note 👋💖</h1>
            <h4>if you don't have an account you can signup , it's too easy</h4>
            <button onClick={()=>setLogstate('signIn')}>SignIn</button>
            <button onClick={()=>setLogstate('signUp')}>SignUp</button>
        </section>
        :logstate=="signIn"?
            <Signin setLogstate={setLogstate} setChanges={setChanges}/>    
            :
            <Signup setLogstate={setLogstate} setChanges={setChanges}/>    
        
        }
    </div>
  )
}

export default Welcome