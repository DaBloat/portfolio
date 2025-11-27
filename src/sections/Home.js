import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import pose from '../assets/pose.png'
import '../style/home.css'

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
                    <div className='socials'>
                        <ul className='social-links'>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href={"mailto:kurtrusselvillamor1206@gmail.com"}>
                                    <MdEmail size={35}/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DaBloat">
                                    <FaGithub size={35}/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ddabloat-villamor">
                                    <FaLinkedin size={35}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img alt='pose' className='pose' src={pose}></img>
                </div>
            </div>
        </section>
    )
}