import React from 'react'
import styles from '../Components/style/footer.module.css'


const Footer = () => {
    console.log(styles)
  return (
    <div className={styles.container}>
        <div className={styles.flex}>
            <div>
                <h3>SOLUTIONS</h3>
                <li>Pluralsight Skills</li>
                <li>Pluralsight Flow</li>
                <li>Government</li>
                <li>Gift of Pluralsight</li>
                <li>View Pricing</li>
                <li>Contact Sales</li>
                <li>Skill up for free</li>
            </div>
            <div>
                <h3>PLATFORM</h3>
                <li>Browse library</li>
                <li>Role IQ</li>
                <li>Skill IQ</li>
                <li>Iris</li>
                <li>Authors</li>
                
                <li>Professional Services</li>
            </div>
            <div>
                <h3>COMPANY</h3>
                <li>About us</li>
                <li>Customer stories</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Newsroom</li>
                <li>Resource center </li>
                <li>Guides</li>
            </div>
            <div>
                <h3>RESOURCES</h3>
                <li>Download Pluralsight</li>
                <li>Events</li>
                <li>Teach</li>
                <li>Partners</li>
                <li>Affiliate Partners</li>
                <li>PluralsightOne.org</li>
                <li>Subscribe</li>
            </div>
            <div>
                <h3>SUPPORT</h3>
                <li>Contact</li>
                <li>Help center</li>
                <li>IP allowlist</li>
                <li>Sitemap</li>
                
            </div>
        </div>
        <div style={{display:"flex", gap:"30px", padding:"40px", borderBottom:"1px solid gray"}}>
            <p>Deutsch</p>
            <p>English</p>
            <p>French</p>
        </div>
        
    </div>
  )
}

export default Footer