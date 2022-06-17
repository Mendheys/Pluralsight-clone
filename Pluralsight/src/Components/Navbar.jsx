import React, { useState } from 'react'
import styles from '../Components/style/navbar.module.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const database = {
    solution: [
      { id:1,h3:"Engineer Onboarding",p:"Get new engineering hires to full productivity faster"},
      { id:2,h3:"Talent mobility",p:"Build the pipelines that put your people in the right seats to succeed"},
      { id:3,h3:"Agile Transformation",p:"Identify how your Agile journey is progressing and how to improve"},
      { id:4,h3:" Software Delivery",p:"Build the pipelines that put your people in the right seats to succeed"},
      { id:5,h3:"Distributed & remote teams",p:"Reduce burnout and cycle time with insights and tools for remote teams"},
      { id:6,h3:"Tech Fluency",p:"Remove knowledge barriers and accelerate every touchpoint to technology"},
      { id:7,h3:"Cloud transformation",p:"Overcome complex cloud challenges and build cloud talent from within"},
      { id:8,h3:" Upskilling & Reskilling",p:"Build the tech skills teams need for mission-critical projects"},
      { id:9,h3:"Opportunity Academies",p:"Source and develop the talent you need—and close opportunity gaps"},


    ]
  }
  const nav = useNavigate()
  

  return (
    <>
    <div className={styles.container}>
      <img src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/global/header/PS_logo.png" alt="" onClick={() => {nav("/")}}/>
      <div className={styles.dropdown}>
        <h4>Solutions</h4>
        <div className={styles.dropdowncontent}>
          <div className={styles.dropContainer}>
            
            {
              database.solution.map((item) => (
                <div>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              ))
            }

          </div>


        </div>
      </div>
      <div className={styles.dropdown}>
        <h4>Platform</h4>
        <div className={styles.dropdowncontent}>
          <div className={styles.dropContainer}>
            <div style={{display:"flex", gap:"20px", padding:"20px"}}>
              <div style={{borderRight:"1px solid gray"}}>
                <h6>WAYS TO UPSKILL</h6>
                
                <h5 onClick={() => {nav("/products")}}>Courses</h5>
                <h5>Skill assessments</h5>
                <h5>Labs</h5>
                <h5>Hands-on learning</h5>
                <h5>Certification prep</h5>
                <h5>Team efficiency</h5>
              </div>
              <div>
                <h6>SKILLS FOR</h6>
                <h5>Software development</h5>
                <h5>IT ops</h5>
                <h5>Info & cyber security</h5>
                <h5>Cloud computing</h5>
                <h5>Machine learning / AI</h5>
                <h5>Data professional</h5>
              </div>
            </div>

          </div>


        </div>
      </div>
      <div className={styles.dropdown}>
        <h4 >Products</h4>
        <div className={styles.dropdowncontent}>
          <div className={styles.dropContainer}>
          <div>
          <h5>What is Skill?</h5>
          </div>
          <div>
          <h5>View Skill</h5>
          </div>
          <div>
          <h5>What is Flow?</h5>
          </div>
          

          </div>


        </div>
      </div>
      <div>
        <h4>Resources</h4>
      </div>
      <div>
        <h4>For Individuals</h4>
      </div>
      
      <div className={styles.signup}>
        <h4 onClick={() => {nav("/plans")}}>Signup</h4>
      </div>
    </div>
    </>
  )
}

export default Navbar