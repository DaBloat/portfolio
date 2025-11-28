import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import pose from '../assets/pose.png'
import '../style/home.css'
import { HorIcons } from '../components'

const email = {
    logo: <MdEmail size={35}/>,
    link: "mailto:kurtrusselvillamor1206@gmail.com"
}

const github = {
    logo: <FaGithub size={35}/>,
    link: "https://github.com/DaBloat"
}

const linkedin = {
    logo: <FaLinkedin size={35}/>,
    link: "https://www.linkedin.com/in/ddabloat-villamor"
}


export const Home = () => {
    return(
        <section id='me' className="section home-sec">
            <div className='home-sec-holder'>
                <div>
                    <h2 className='commands'>kurt@portfolio:~$ whoami</h2>
                    <h1 className='output'>Kurt Russel</h1>
                    <h2 className='commands'>kurt@portfolio:~$ current-status</h2>
                    <h1 className='output'>Computer Engineering Student</h1>
                    <h2 className='commands'>kurt@portfolio:~$ cat interests.txt</h2>
                    <h1 className='output'>Data Science | Linux Enthusiast | Dev</h1>
                    <HorIcons items={[email, github, linkedin]} itemStyle={{gap: '50px'}}/>
                </div>
                <div>
                    <img alt='pose' className='pose' src={pose}></img>
                </div>
            </div>
        </section>
    )
}