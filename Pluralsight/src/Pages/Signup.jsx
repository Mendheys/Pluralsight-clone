import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Components/style/signup.module.css'


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    var userArr = JSON.parse(localStorage.getItem("UserDatabase"))||[];
    const data = {
        email:email,
        password:password
    }
    const nav = useNavigate()
    
    const handleClick = () => {
        
        userArr.push(data);
        localStorage.setItem("UserDatabase",JSON.stringify(userArr));
        nav('/login')

        
    }
    
  return (
    <div style={{backgroundColor:"#181818"}}>
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    <h2>Account Details</h2>
                    <br />
                    
                    <label>First name*    :</label>
                    <input type="text" placeholder='Enter First name'/>
                    <br />
                    <br />
                    <label>Last name*  :</label>
                    <input type="text" placeholder='Enter Last name'/>
                    <br />
                    <br />
                    <label>Email* :</label>
                    <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                    <br />
                    <br />
                    <label>Choose Password*</label>
                    <input type="password" placeholder='Enter Password'onChange={(e) => setPassword(e.target.value)}/>
                    <br /><br /><br /><br />
                    <button className={styles.viewplan} onClick={handleClick}>SIGNUP</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Signup