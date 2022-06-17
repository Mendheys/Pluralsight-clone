import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Components/style/products.module.css'

const Products = () => {
    const database = {
        all:[{
            head:"Building an End-to-end SPA Using ASP.NET Core 6 Web API and React",
            by:"by Roland Guijt",
            time:"2h 16m",
            category:"Intermediate",
            rating:"10",
            sortDes:"Foundational knowledge is one thing, but how do you actually build an application using React and ASP.NET Core Web API? Prepare for a guided tour through the whole process in this course.",
            des:"Theoretical knowledge about ASP.NET Core Web API and React is one thing, but what about practical experience? This course helps you with that by building a complete solution from start to finish. In this course, Building an End-to-end SPA Using ASP.NET Core 6 Web API and React, you will learn how to build an application end-to-end with these technologies. First, you will discover how to set up the environment by creating a simple React app and accessing the API. Then, you will explore and build a real-world application step-by-step right from the beginning. Finally, you will learn how to update, delete, authenticate your app. By the end of this course, you will have a fully functional API with accompanying React Single Page Application as well as all the knowledge needed to create your own!",
            table:[
                {
                    name:"Course Overview",
                    time:"1min"

                },
                {
                    name:"First Steps",
                    time:"18min"

                },
                {
                    name:"Exposing, Getting, and Displaying Data",
                    time:"16min"

                },
                {
                    name:"Adding Frontend Routing and Navigation",
                    time:"23min"

                },
                {
                    name:"Creating, Updating, and Deleting Data",
                    time:"35min"

                },
                {
                    name:"Working with Related Data",
                    time:"13min"

                }

            ]
    },
    {
        head:"WinUI 3 Fundamentals",
        by:"by Thomas Claudius Huber",
        time:"2h 16m",
        category:"Intermediate",
        rating:"10",
        sortDes:"The Windows UI Library (WinUI) is the native UI framework of Windows 10 and Windows 11. This course teaches you how to use WinUI and its UI description language XAML to build modern Windows desktop applications with .NET and C#.",
        des:"The Windows UI Library (WinUI) is Microsoft's latest UI framework that you can use to build native Windows desktop applications with .NET and C#. In this course, WinUI 3 Fundamentals, you’ll learn the skills you need to develop and maintain WinUI applications. First, you’ll explore the structure of a WinUI app, and you’ll learn about the Extensible Application Markup Language (XAML). Next, you’ll discover how to build user interfaces with layout panels, data binding, styles, templates, and the MVVM pattern. Finally, you’ll learn how to debug your WinUI app with the XAML debugging tools of Visual Studio. When you’re finished with this course, you’ll have the skills and knowledge of WinUI and XAML needed to work successfully on WinUI projects.",
        table:[
            {
                name:"Course Overview",
                time:"1min"

            },
            {
                name:"Creating Your First WinUI Application",
                time:"18min"

            },
            {
                name:"Instantiating Objects in XAML",
                time:"16min"

            },
            {
                name: "Building a User Interface",
                time:"23min"

            },
            {
                name:"Organizing Code with UserControls",
                time:"35min"

            },
            {
                name:"Applying Data Binding and MVVM",
                time:"13min"

            }

        ]
},
{
    head:"Ethical Hacking: Malware Threats",
    by:"by Dale Meredith",
    time:"2h 16m",
    category:"Intermediate",
    rating:"10",
    sortDes:"Malware is specifically designed to gain access or damage systems without the knowledge of the victim. This course will teach you how malware is created, utilized, and detected. You’ll learn all that is needed for the CEH 312-50 concerning malware.",
    des:"",
    table:[
        {
            name:"Course Overview",
            time:"1min"

        },
        {
            name:"Explaining Malware Threats",
            time:"18min"

        },
        {
            name:"Discussing Advanced Persistent Threats (APT)",
            time:"16min"

        },
        {
            name: "Explaining Trojans",
            time:"23min"

        },
        {
            name:"Diving Deeper into Trojans",
            time:"35min"

        },
        {
            name:"Describing the Types of Trojans",
            time:"13min"

        }

    ]
},
{
    head:"Ethical Hacking: Reconnaissance/Footprinting",
    by:" by Dale Meredith ",
    time:"2h 16m",
    category:"Intermediate",
    rating:"10",
    sortDes:"Reconnaissance/Footprinting is the first phase attackers perform. This course will teach you the skills attackers use, which is needed for the CEH Exam.",
    des:"You’ve chosen your target, now it’s time to gain intel about your target without their knowledge. In this course, Ethical Hacking: Reconnaissance/Footprinting, you’ll learn how attackers start profiling your organization. First, you’ll explore the concept of reconnaissance/footprinting and why it’s such an important phase of attack. Next, you’ll discover how to use search engines and web services to give you a better picture of your target and their resources. Finally, you’ll learn how to use some of the industry's top tools to gather and document your findings. When you’re finished with this course, you’ll have the skills and knowledge of reconnaissance/footprinting needed for the Certified Ethical Hacker Exam.",
    table:[
        {
            name:"Course Overview",
            time:"1min"

        },
        {
            name:"Creating Your First WinUI Application",
            time:"18min"

        },
        {
            name:"Instantiating Objects in XAML",
            time:"16min"

        },
        {
            name: "Building a User Interface",
            time:"23min"

        },
        {
            name:"Organizing Code with UserControls",
            time:"35min"

        },
        {
            name:"Applying Data Binding and MVVM",
            time:"13min"

        }

    ]
},
{
    head:"WinUI 3 Fundamentals",
    by:"by Thomas Claudius Huber",
    time:"2h 16m",
    category:"Intermediate",
    rating:"10",
    sortDes:"The Windows UI Library (WinUI) is the native UI framework of Windows 10 and Windows 11. This course teaches you how to use WinUI and its UI description language XAML to build modern Windows desktop applications with .NET and C#.",
    des:"The Windows UI Library (WinUI) is Microsoft's latest UI framework that you can use to build native Windows desktop applications with .NET and C#. In this course, WinUI 3 Fundamentals, you’ll learn the skills you need to develop and maintain WinUI applications. First, you’ll explore the structure of a WinUI app, and you’ll learn about the Extensible Application Markup Language (XAML). Next, you’ll discover how to build user interfaces with layout panels, data binding, styles, templates, and the MVVM pattern. Finally, you’ll learn how to debug your WinUI app with the XAML debugging tools of Visual Studio. When you’re finished with this course, you’ll have the skills and knowledge of WinUI and XAML needed to work successfully on WinUI projects.",
    table:[
        {
            name:"Course Overview",
            time:"1min"

        },
        {
            name:"Creating Your First WinUI Application",
            time:"18min"

        },
        {
            name:"Instantiating Objects in XAML",
            time:"16min"

        },
        {
            name: "Building a User Interface",
            time:"23min"

        },
        {
            name:"Organizing Code with UserControls",
            time:"35min"

        },
        {
            name:"Applying Data Binding and MVVM",
            time:"13min"

        }

    ]
},
{
    head:"WinUI 3 Fundamentals",
    by:"by Thomas Claudius Huber",
    time:"2h 16m",
    category:"Intermediate",
    rating:"10",
    sortDes:"The Windows UI Library (WinUI) is the native UI framework of Windows 10 and Windows 11. This course teaches you how to use WinUI and its UI description language XAML to build modern Windows desktop applications with .NET and C#.",
    des:"The Windows UI Library (WinUI) is Microsoft's latest UI framework that you can use to build native Windows desktop applications with .NET and C#. In this course, WinUI 3 Fundamentals, you’ll learn the skills you need to develop and maintain WinUI applications. First, you’ll explore the structure of a WinUI app, and you’ll learn about the Extensible Application Markup Language (XAML). Next, you’ll discover how to build user interfaces with layout panels, data binding, styles, templates, and the MVVM pattern. Finally, you’ll learn how to debug your WinUI app with the XAML debugging tools of Visual Studio. When you’re finished with this course, you’ll have the skills and knowledge of WinUI and XAML needed to work successfully on WinUI projects.",
    table:[
        {
            name:"Course Overview",
            time:"1min"

        },
        {
            name:"Creating Your First WinUI Application",
            time:"18min"

        },
        {
            name:"Instantiating Objects in XAML",
            time:"16min"

        },
        {
            name: "Building a User Interface",
            time:"23min"

        },
        {
            name:"Organizing Code with UserControls",
            time:"35min"

        },
        {
            name:"Applying Data Binding and MVVM",
            time:"13min"

        }

    ]
}]
    }

    const nav = useNavigate()


    const handleClick = (e) => {
        localStorage.setItem("item",JSON.stringify(e))
        nav("/products/product")
    }
  return (
    <div style={{padding:"80px", background:"#181818"}}>
        <div className={styles.container}>
            <h1>Thousands of courses authored by our network of industry experts</h1>
        </div>

        <h2>Search</h2>
        <div>
            <input type="text" placeholder='      Search'  className={styles.input}/>
             <button className={styles.search}>Search</button>
             <button className={styles.sort}>Sort By</button>
        </div>

        <div className={styles.content}>
            <div className={styles.div1}>
                <h3 style={{borderBottom:"1px solid grey", padding:"20px"}}>Ways to Learn</h3>
                <input type="radio" /> <label >All</label> <br />
                <input type="radio" /> <label >Core courses</label> <br />
                <input type="radio" /> <label >Expanded courses</label> <br /><br />
                <input type="radio" /> <label >Labs</label> <br /><br />


                <h3 style={{borderBottom:"1px solid grey", padding:"20px"}}>Skill Level</h3>
                <input type="checkbox" /> <label >Advanced</label> <br /><br />
                <input type="checkbox" /> <label >Beginner</label> <br /><br />
                <input type="checkbox" /> <label >Intermediate</label> <br /><br />

                <h3 style={{borderBottom:"1px solid grey", padding:"20px"}}>Subjects</h3>
                <input type="checkbox" /> <label >Architecture & construction</label> <br /><br />
                <input type="checkbox" /> <label >Business professional</label> <br /><br />
                <input type="checkbox" /> <label >Creative professional</label> <br /><br />
                <input type="checkbox" /> <label >Data professional</label> <br /><br />
                <input type="checkbox" /> <label >IT ops</label> <br /><br />
                <input type="checkbox" /> <label >Manufacturing & design</label> <br /><br />
                <input type="checkbox" /> <label >Information & cyber security</label> <br /><br />
                <input type="checkbox" /> <label >Software development</label> <br /><br />
                <input type="checkbox" /> <label >Web development</label> <br /><br /><br />

                <button className={styles.clear}>Clear Filter</button>
                

            </div>
            <div  className={styles.div2}>
                {
                    database.all.map((item) => (
                        <div style={{padding:"20px",borderBottom:"1px solid darkGrey"}} onClick={() => {handleClick(item)}}>
                    <h3>{item.head}</h3>
                    <p>{item.by}</p>
                    <div style={{display:"flex", gap:"20px"}}>
                        <p>{item.time}</p>
                        <p>{item.category}</p>
                        <p>rating:{item.rating}</p>

                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products