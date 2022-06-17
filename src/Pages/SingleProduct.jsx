import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Components/style/single.module.css'

const SingleProduct = () => {
    const database = JSON.parse(localStorage.getItem("item"))
    // console.log(database)
    const nav = useNavigate()
    const handleItem = () => {
      window.location.href="https://app.pluralsight.com/course-player?clipId=12503fa3-7ada-45f0-a4b0-8c09df0e2e6e&_gl=1*bdjc0r*_ga*NzIzODIzNjIxLjE2NTUyNzAyNTU.*_ga_525M96C6Y1*MTY1NTQ1MDE0My4xOC4xLjE2NTU0NTEyMDIuMA..";
    }
  return (
    <div style={{padding:"80px", background:"#181818"}}>
      <div className={styles.container}>
        <h1>{database.head}</h1>
        <p>{database.by}</p>
        <br /><br />
        <p>{database.sortDes}</p>
        <br /><br />
        <button className={styles.btn}>Preview This Course</button>
        <br /><br /><br /><br />
        <h4>What you will learn</h4>
        <br />
        <p>{database.des}</p>
      </div>
      <div className={styles.table}>
        <h2 style={{borderBottom:"1px solid grey",padding:"20px"}}>Table of contents</h2>
        <div style={{padding:"30px"}}>
          {
            database.table.map((item) => (
              <div className={styles.content} onClick={handleItem}>
                <h3>{item.name}</h3>
                <h5>{item.time}</h5>
              </div>
            ))
          }

        </div>
            
      </div>
        
    </div>
  )
}

export default SingleProduct