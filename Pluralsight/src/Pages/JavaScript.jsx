import React from 'react'
import styles from '../Components/style/javaScript.module.css'

const JavaScript = () => {
    const dataBase = {
        courses:[
            {
                id:1,
                name:"JavaScript: Getting Started",
                by:"by Mark Zamoyta",
                time:"3h 58m"
            },
            {
                id:2,
                name:"JavaScript Syntax and Operators",
                by:"by Paul D. Sheriff",
                time:"1h 58m"
            },
            {
                id:3,
                name:"JavaScript Variables and Types",
                by:"by Barry Luijbregts",
                time:"58m"
            },
            {
                id:4,
                name:"JavaScript Objects, Prototypes, and Classes",
                by:"by Jim Cooper",
                time:"1h 58m"
            },
            {
                id:5,
                name:"JavaScript: Functions",
                by:"by Prateek Parekh",
                time:"3h 58m"
            },
            {
                id:6,
                name:"JavaScript Arrays and Collections",
                by:"by Jeff Batt",
                time:"1h 8m"
            },
            {
                id:7,
                name:"Javascript Generators and Iterators",
                by:"by Marques Woodson",
                time:"3h 58m"
            },
            {
                id:8,
                name:"Working with JavaScript Modules",
                by:"by Nate Taylor",
                time:"3h 58m"
            },
            {
                id:9,
                name:"JavaScript Promises and Async Programming",
                by:"by Mark Zamoyta",
                time:"3h 58m"
            },
            {
                id:10,
                name:"JavaScript Security: Best Practices",
                by:"by Marcin Hoppe",
                time:"3h 58m"
            }
        ],
        best:[
            {
                id:11,
                img:"https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg",
                name:"Mark Zamoyta",
                des:"Mark started in the developer world over 25 years ago. He began his career with a Bachelor of Science in Computer Science from St. Johns University. After spending 10 years on Wall Street working for Goldman Sachs, Lehman Brothers and other major investment banks, Mark became interested in animation and video game software. He has written numerous mobile apps and games for clients including Electronic Arts and Yahoo! Games. Some of his popular mobile titles include Yahtzee, Yahoo! Chess, and Yahoo! Poker. Currently, Mark is the founder of Curious Inventions in Portland, Oregon. This company develops a wide range of entertainment and educational software titles for the web and mobile devices."

            },
            {
                id:12,
                img:"https://pluralsight.imgix.net/author/lg/a4d1169c-fd62-46ea-9e46-e7ae41428f04.jpeg",
                name:"Paul D. Sheriff",
                des:"Paul has over thirty years of experience architecting information systems and his expertise is in much demand from Fortune 500 companies. Paul is a Pluralsight author, has published 400+ articles, and authored over 14 books on topics ranging from JavaScript, Angular, C#, SQL Server and many .NET technologies. Paul is a frequent speaker at conferences and user groups."
            },
            {
                id:13,
                img:"https://pluralsight.imgix.net/author/lg/92b122b0-4503-43f2-8544-daeb17d023cd.png",
                name:"Barry Luijbregts",
                des:"Barry is an independent software architect and developer with a passion for the cloud. He is also a Pluralsight author and a podcast host. He has worked for lots of companies throughout the last decades and is keen to share his knowledge with the community. He has a broad and deep knowledge of the Microsoft stack with a special interest on web technology and the cloud. He currently teaches people about the benefits of the cloud. You can reach Barry on Twitter @AzureBarry and through his website at https://www.azurebarry.com/ and check out his podcast “Developer Weekly” in your favorite podcast app or at https://www.developerweeklypodcast.com/."
            },
            {
                id:14,
                img:"https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg",
                name:"Jim Cooper",
                des:"Jim Cooper is a software developer at Pluralsight, with more than 20 years of software development experience. He has a passion for Agile processes, especially lean software development. Jim has been developing production Angular apps since before Angular version 1.0, including Pluralsight's first Html5-based video player. Jim has over 10 years of TDD and pair programming experience which has contributed significantly to his professional development. He has successfully mentored other developers in the use of TDD and agile practices and still enjoys learning from talented developers everywhere."
            },
            {
                id:15,
                img:"https://pluralsight.imgix.net/author/lg/b740e395-5b77-4b8a-bd35-781a7788a5ba.jpeg",
                name:"Prateek Parekh",
                des:"Prateek is a software engineer that has been working on designing, developing, and testing enterprise as well as customer facing applications for companies like Zoom, Sun Microsystems, Oracle, and eBay. His interests include architecture, distributed systems, and security. He is passionate about technology and how it can help make learning fun, engaging, and widely accessible."
            },
            {
                id:16,
                img:"https://pluralsight.imgix.net/author/lg/aef1f7b5-64b9-4115-acfb-910a6dba9ae9.jpg",
                name:"Jeff Batt",
                des:"Jeff has 10+ years experience in the digital learning and media industry. Currently he is Founder and Head Trainer/Sensei at Learning Dojo, a company dedicated to training you to become a software ninja in a variety of eLearning, web, and mobile related software applications. Jeff is also the Digital Learning Development Manager for The Church of Jesus Christ of Latter-day Saints, producing online training for the Church world wide. Jeff has also been the Product Development Manager for eLearning Brothers with responsibility for the design,"
            },
            {
                id:17,
                img:"https://pluralsight.imgix.net/author/lg/7265d297-53d8-44a1-a49c-8f99d777b866.jpeg",
                name:"Marques Woodson",
                des:"Marques has been involved with software development for years, specializing in Javascript application architecture, hybrid mobile application development, and Node.js applications. As a family man living in Chicago, he's had the chance to work with large enterprises doing legacy code optimization and refactoring, and startups building from the ground up. I'm passionate about experimenting with Javascript frameworks and libraries and figuring out what would work best for my current team/project"
            },
            {
                id:18,
                img:"https://pluralsight.imgix.net/author/lg/jonathan-mills-v2.jpg",
                name:"Jonathan Mills",
                des:"Jonathan is a Pluralsight Author, Technology Advisor, and Business Leader. As a member of the Chief Digital Advisory team at World Wide Technology, Jonathan is able to leverage his unique experiences and skills to drive digital transformation for his clients. As a dedicated developer community leader, Jonathan serves on the board of directors for the Kansas City Developers Conference, is a Microsoft MVP, and is a regular speaker and keynote presenter at conferences around the globe."
            },
            {
                id:19,
                img:"https://pluralsight.imgix.net/author/lg/nate-taylor-v2.jpg",
                name:"Nate Taylor",
                des:"Nate's first program was written in QBasic on an 8086 clone his dad built. Since then he's written applications in C++, .NET, and Node.js. He spent the first 12 years of his career writing Windows applications before transitioning to write applications for the web. Regardless of the language or type of application he's written, he strives for writing clean, testable, and maintainable code. In addition to his day job as a developer, Nate also enjoys speaking at various conferences."
            },
            {
                id:20,
                img:"https://pluralsight.imgix.net/author/lg/08f9ff65-6918-4d4d-a6c9-f406931f4f37.jpg",
                name:"Marcin Hoppe",
                des:"Marcin Hoppe is a principal engineer on the Auth0 Platform Security team at Okta. He is passionate about building secure applications and promoting security best practices in the software development community. Marcin’s experience covers software engineering and various areas of information security, such as identity and access management, application and cloud infrastructure security, zero-trust architectures, cryptography, and privacy."
            },
        ]
    }
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.partone}>
        <h3 style={{color:"#ec008c"}}>LEARNING PATHS</h3>
        <h1>JavaScript Core Language</h1>
        <div className={styles.flexBtn}>
            <div>10 courses</div>
            <div> 16 hours</div>
            <div> Skill IQ</div>
        </div>
        <p>JavaScript is an interpreted programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. In this path you will learn the basics of JavaScript as well as more advanced topics such as promises, asynchronous programming, proxies and reflection.</p>
        <br />
        <h2>Courses in this path</h2>
        <br />
        <p>Dive into JavaScript while learning the basics of arrays, collections, and functions as well as advanced topics such as promises and asynchronous programming.</p>
        <br />
        <div>
            {
                dataBase.courses.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <h2>{item.name}</h2>
                        <div style={{display:"flex", gap:"50px"}}>
                            <p>{item.by}</p>
                            <h4>{item.time}</h4>
                        </div>

                    </div>
                ))
            }
        </div>

        </div>



        <div className={styles.parttwo}>
            <div >
                <h2>Try for free</h2>
                
                <p>Get this learning path plus top-rated picks in tech skills and other popular topics.</p>
                <button className={styles.btn}>GET STARTED</button>

            </div>
            <div>
                <h2>Your 10 day free trial includes</h2>
                <h4>Expert-led courses</h4>
                <p>Keep up with the pace of change with thousands of expert-led, in-depth courses.</p>
            </div>
            <div>
                <h2>For Teams</h2>
                <h4>Give up to 10 users access to our full library including this path free for 14 days</h4>
            </div>
            <br /><br />
            <div>
         <h2>What You Will Learn</h2>
         <ul>
            <li>Utilize modules for code organization</li>
            <li>Employ classes for code organization</li>
            <li>Understand communication and browser integration</li>
            <li>Demonstrate asynchronous programming techniques</li>
            <li>Use proxies and reflection</li>
         </ul>
         
         </div>
         <div>
         <h2>Experience</h2>
         <ul>
            <li>HTML</li>
            <li>CSS</li>
         </ul>

         </div>
        </div>
         
         
        
    </div>
    <div className={styles.afterConatiner}>
        <h1>Learn with the best</h1>
        <br />

        <div>
            {
                dataBase.best.map((item) => (
                    <div>
                        <div className={styles.cardTwo}>
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                            
                        </div>
                        <p>{item.des}</p>
                    </div>
                ))
            }
        </div>

    </div>
    </div>
  )
}

export default JavaScript