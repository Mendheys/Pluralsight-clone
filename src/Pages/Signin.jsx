import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Components/style/signin.module.css'

const Signin = () => {
  var regdUsers = JSON.parse(localStorage.getItem("UserDatabase"));
  const nav = useNavigate()

  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = ( ) => {
      for(var i=0;i<regdUsers.length;i++)
        {   
            if(regdUsers[i].email == email && regdUsers[i].password == password)
            {
                // console.log("Sign in successful");
                alert("You Have Been Sign in Successfully")
                nav("/")
                return;
            }
           
        }
        alert("Username or password is wrong please try again.");
        

        

    }

  return (
    <div style={{backgroundColor:"#181818"}}>
        <div className={styles.container}>
        <h1>Sign in</h1>
        <input  type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input  type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <div style={{display:"flex"}}>
        
        <br /><br />
        <p style={{margin:"auto"}}>Keep me signed in</p>
        </div>
        <button className={styles.viewplan} onClick={handleClick}>Sign in</button>
        <br />
        <a >Forgot password?</a>
        <p style={{textAlign:"center"}}>Don't have an account?<a >Create one</a></p>
        <p style={{textAlign:"center",marginTop:"20px"}}>or continue with</p>
        
    </div>
    </div>
  )
}

export default Signin