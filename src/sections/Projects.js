import { Card } from '../components'
import '../style/projects.css'
import eel_logo from '../assets/eelytics-logo.png'
import bantai_logo from '../assets/BANTAI-logo.png'
import seeenen_logo from '../assets/seeenen-logo.png'
import ps_logo from '../assets/PS-logo.png'
import aa_logo from '../assets/AA-logo.png'
import kupass_logo from '../assets/kupass-logo.png'
import huck_logo from '../assets/HUCK-logo.png'
import tapsi_logo from '../assets/tapsi-logo.png'
import { FaPython, FaReact, FaHtml5, FaCss3 } from "react-icons/fa"
import { FaGears } from "react-icons/fa6"
import { SiPytorch, SiJavascript, SiFlask, SiHuggingface, SiQt, SiScikitlearn, SiMysql} from "react-icons/si"
import { DiSqllite } from "react-icons/di"
import { TbBrandCpp } from "react-icons/tb"

const python = {
    logo: <FaPython size={25}/>,
    link: null
}

const scikit = {
    logo: <SiScikitlearn size={25}/>,
    link: null
}

const mysql = {
    logo: <SiMysql size={25}/>,
    link: null
}

const sqllite = {
    logo: <DiSqllite size={25}/>,
    link: null
}

const qt = {
    logo: <SiQt size={25}/>,
    link: null
}

const pytorch= {
    logo: <SiPytorch size={25}/>,
    link: null
}

const huggingface= {
    logo: <SiHuggingface size={25}/>,
    link: null
}

const flask= {
    logo: <SiFlask size={25}/>,
    link: null
}

const javascript= {
    logo: <SiJavascript size={25}/>,
    link: null
}

const html= {
    logo: <FaHtml5 size={25}/>,
    link: null
}

const css= {
    logo: <FaCss3 size={25}/>,
    link: null
}

const react = {
    logo: <FaReact size={25}/>,
    link: null
}

const cpp = {
    logo: <TbBrandCpp size={25}/>,
    link: null
}

const hardware = {
    logo: <FaGears size={25}/>,
    link: null
}

const proj_eelytics = {
    logo: eel_logo,
    name:'EELYTICS',
    desc:'A hardware-integrated Computer Vision system that estimates the size of live eels and automatically segregates them based on length.',
    stack: [python, pytorch, javascript, react, cpp, hardware]
}

const proj_bantai = {
    logo: bantai_logo,
    name:'BANTAI',
    desc:'AI software that monitors worker compliance with OSH standards using Computer Vision. Worked on Web UI and Model Integration.',
    stack: [python, flask, huggingface]
}

const proj_see_en_en = {
    logo: seeenen_logo,
    name:'SEE-EN-EN',
    desc:'A custom CNN model trained for Voice Tonal Analysis to detect sentiment patterns from recorded audio clips.',
    stack: [python, pytorch]
}

const proj_ps = {
    logo: ps_logo,
    name:'PROJECT SILHOUETTE',
    desc:'A responsive web archive featuring a compilation of short films regarding cybercrime awareness.',
    stack: [html, css, javascript]
}

const proj_aa = {
    logo: aa_logo,
    name:'ARCHIVE/AID',
    desc:'A multi-platform file organizer which divides your files base on their extensions for Both Linux and Windows Operating Systems.',
    stack: [python, qt]
}

const proj_kupass = {
    logo: kupass_logo,
    name:'KUPASS',
    desc:'An integrated password management tool that generates secure credentials, stores them in a local database, and automates the login process for saved websites.',
    stack: [python, sqllite]
}

const proj_huck = {
    logo: huck_logo,
    name:'HUCK',
    desc:"Highly Unconventional Creative Knowledge (HUCK): The core AI engine responsible for the TAPSILogV2 System's facial recognition, powered by a KNN model.",
    stack: [python, scikit]
}

const proj_tapsi = {
    logo: tapsi_logo,
    name:'TAPSILOG SYSTEM',
    desc:"Total Activity Processed through a Strictly Implemented Log System (TAPSILog): A digital logging solution that utilizes QR for Subdivisions.",
    stack: [python, qt, mysql]
}

export const Projects = () => {
    return(
        <section id='projects' className="section project-sec">
            <div className='project-text'>
                <h3 className='header-command'>kurt@portfolio:~$ cd Projects</h3>
                <h1 className='header-text'>Projects</h1>
            </div>
            <div className="project-carousel">
                <Card project={proj_eelytics}/>
                <Card project={proj_bantai}/>
                <Card project={proj_see_en_en}/>
                <Card project={proj_ps}/>
                <Card project={proj_aa}/>
                <Card project={proj_kupass}/>
                <Card project={proj_huck}/>
                <Card project={proj_tapsi}/>
            </div>
        </section>
    )
}