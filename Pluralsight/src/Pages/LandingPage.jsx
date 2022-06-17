import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../Components/style/landing.module.css'

const LandingPage = () => {
    const DataBase = {
        tech: [ 
            {name:"JavaScript", course:"11 Courses", img:"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png", link:"/javaScript"},
        {name:"Angular", course:"14 Courses", img:"https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png",link:"/angular"},
        {name:"Core Python", course:"12 Courses", img:"https://pluralsight.imgix.net/paths/python-7be70baaac.png",link:"/python"},
        {name:"C#", course:"19 Courses", img:"https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png?",link:"/c++"}
    ],
    feature: [
        {
            img:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/certification-prep.png",
            head1:"Certification prep",
            head2:"Empower your teams to grow their skills and their careers",
            p:"Prepare your team for certification exams with our expert authored content and practice exams."

        },
        {
            img:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/delivery-module.png",
            head1:"Delivery Module",
            head2:"Make lasting workflow improvements with insights from your Jira data",
            p:"Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow."

        },
        {
            img:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/sandboxes.png",
            head1:"Sandboxes",
            head2:"Utilize a space for unrestricted explorations",
            p:"Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses."
        }

    ],
    keepuptodate: [
        {
            img:"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy/parsys/image/image-res.img.7ff160d9-5248-4b11-804e-cf66f7281f75.jpg",
            head1:"WHAT IS PLURALSIGHT SKILLS?",
            para:"Discover the fastest, most effective path to developing technology skills"
        },
        {
            img:"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_1875049544/parsys/image/image-res.img.50c64034-5c04-4b3b-aa76-4d2ce92c35cc.png",
            head1:"PLURALSIGHT NAMED A LEADER FOR IT TRAINING",
            para:"We're honored to be recognized in the 2021 IDC MarketScape for IT training."
        },
        {
            img:"https://www.pluralsight.com/content/dam/pluralsight2/homepage/flow-demo-thumbnail.png",
            head1:"LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW WITH FLOW",
            para:"Take a guided tour through Pluralsight Flow to see how visibility can take your team to the next level"
        },
        {
            img:"https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_383891725/parsys/image/image-res.img.52e3fa3f-a6b2-4942-bee6-bdf060c01de7.png",
            head1:"CREATE YOUR FREE ACCOUNT",
            para:"Build new tech skills on us with free access to 50+ expert-led courses, assessments and more."
        }
    ]

    }
    const navigation = useNavigate()
  return (
    <div style={{marginTop:"30px"}}>
        <div className={styles.container}>
            <h1>Build Better</h1>
            <p style={{fontSize:"18px"}}>Face the future with confidence—and with the skills and tools to thrive.</p>
            <div className={styles.btn}>
                <button className={styles.viewplan} onClick={() => {navigation("/plans")}}>VIEW PLAN</button>
                <button className={styles.try}>TRY FOR FREE</button>
            </div>
            <h5>HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE.</h5>
        </div>



        <div style={{marginTop:"0px", backgroundColor:"black", padding:"20px", height:"650px"}}>
            <div style={{ width:"60%",margin:"auto"}}>
                <h4 style={{color:"#E40084",marginBottom:"40px"}}>TRENDING TECHNOLOGIES</h4>
                
                <h2>Popular topics to learn now</h2>
                <div className={styles.popToipcs}>
                    {
                        DataBase.tech.map((item) => (
                            <div style={{display:"flex",justifyContent: "space-evenly",  background:"#222222", padding:"10px", borderRadius:"10px", height:"160px"}}>
                                <div style={{width:"300px"}}>
                                    <h5 style={{color:"#E40084"}}>PATH</h5>
                                    <p>{item.course}</p>
                                    <Link to={item.link}>Take a Look</Link>
                                </div>
                                <div>
                                    <img src={item.img} alt=""  style={{width:"100px"}}/>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>

{/* section */}

        <div style={{background:"#181818",marginTop:"-20px"}}>
                    <div className={styles.latest}>
                        <h3 style={{color:"#E40084"}}>SEE WHAT'S NEW</h3>
                        <h1>Our latest features</h1>
                        <div style={{display:"flex", padding:"30px", justifyContent:"space-evenly"}}>
                            <div style={{padding:"15px", background:"#222222"}}>
                                <h2 >SKILLS</h2>
                                <h2 style={{fontSize:"32px"}}>Deepen your people's expertise with hands-on labs</h2>
                                <p>Improve your teams’ confidence in their ability to deliver on business objectives by building the right skills that meet your org’s needs. Pluralsight offers 950+ labs that enable hands-on practice in secure environments across domains such as cloud (AWS, GCP and Azure), IT Ops, security, data and software development.</p>
                            </div>
                            <div>
                                <img src='https://www.pluralsight.com/content/dam/pluralsight2/homepage/Cloud-labs-image2x-min.png' alt=""  style={{width:"570px", height:"380px"}}/>
                                
                            </div>
                        </div>
                            {/* section */}
                        <div style={{display:"flex", gap:"20px", justifyContent:"space-evenly", marginTop:"50px"}}>
                            {
                                DataBase.feature.map((item) => (
                                    <div style={{width:"350px", background:"#222222", padding:"40px", borderRadius:"20px"}}>
                                     <img src={item.img} alt="" />
                                            <h1>{item.head2}</h1>
                                            <p>{item.p}</p>
                                            <Link to="/" >Take a Look</Link>
                                    </div>
                                ))
                            }
                        </div>
                        <br /><br /><br /><br />
                        {/* section */}



                        <div >
                            <h3 style={{color:"#E40084"}}>KEEP UP TO DATE</h3>
                            <h1>Discover more about Pluralsight</h1>
                            
                            <div className={styles.keepuptodate}>
                                {
                                    DataBase.keepuptodate.map((item) => (
                                        <div>
                                            <img src={item.img} alt="" style={{width:"275px", height:"145px", borderRadius:"10px"}}/>
                                            <h4 style={{color:"orange"}}>{item.head1}</h4>
                                            <br />
                                            <p>{item.para}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>

        </div>

        <div className={styles.free}>
            <h2>Insights that give you an edge</h2>
            <button>TRY FOR FREE</button>
        </div>

        {/* section */}
    
    </div>
    
  )
}

export default LandingPage