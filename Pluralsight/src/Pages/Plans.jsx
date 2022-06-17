import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../src/Components/style/plans.module.css'

const Plans = () => {
    const navigation = useNavigate()
    const handleClick = () => {
        navigation('/signup')
    }
  return (
    <div style={{backgroundColor:"#181818"}}>
        <div className={styles.container}>
            <img src="https://www.pluralsight.com/content/dam/pluralsight2/product/v2/logos/logo-skills.png" alt="" />
                <h1>Plans & pricing</h1>
                <button className={styles.clear1}>Monthly</button>
                <button className={styles.clear1}>Yearly</button>
                <div className={styles.ads}>
                    <div>
                        <h1>Standard</h1>
                        <h3>₹ 1,499</h3>
                        <p>per month</p>
                        <br />
                        <p style={{width:"200px"}}>Core course library,paths and skill assessments</p>
                        <br />
                        <button className={styles.viewplan} onClick={handleClick}>START WITH STANDARD</button>
                        <p>or start a FREE trial</p>
                    </div>
                    <div>
                    <div>
                        <h1>Premium</h1>
                        <h3>₹  2,299</h3>
                        <p>per month</p>
                        <br />
                        <p style={{width:"390px"}}>Entire library of core and expanded courses, exams, projects and interactive courses.</p>
                        <br />
                        <button className={styles.viewplan} onClick={handleClick}>START WITH PREMIUM</button>
                        <p>or start a FREE trial</p>
                    </div>
                    </div>
                </div>
                <h2>Compare our course libraries</h2>
                <div className={styles.head}>
                    <div>
                    
                    </div>
                    <div>
                        <h2>Core library</h2>
                        <p style={{width:"200px"}}>Our core library features 2,500+ of our most-popular courses on in-demand topics like cloud, data, security, software development, infrastructure and more.</p>
                    </div>
                    <div>
                    <h2>Expanded library</h2>
                        <p style={{width:"200px"}}>Our expanded library gives you access to our full 7,000+ course library. It includes more advanced topics if you need to build deep expertise and niche topics for those tackling special projects.</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Plans