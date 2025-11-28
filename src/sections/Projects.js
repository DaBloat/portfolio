import { Card } from '../components'
import '../style/projects.css'
import eel_logo from '../assets/eelytics-logo.png'
import bantai_logo from '../assets/BANTAI-logo.png'
import seeenen_logo from '../assets/seeenen-logo.png'
import ps_logo from '../assets/PS-logo.png'
import aa_logo from '../assets/AA-logo.png'
import { FaPython, FaReact, FaHtml5, FaCss3 } from "react-icons/fa"
import { FaGears } from "react-icons/fa6"
import { SiPytorch, SiJavascript, SiFlask, SiHuggingface, SiQt } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb"

const python = {
    logo: <FaPython size={25}/>,
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
            </div>
        </section>
    )
}