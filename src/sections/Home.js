import pose from '../assets/pose.png'
import '../style/home.css'

export const Home = () => {
    return(
        <section id='me' className="section home-sec">
            <div className='home-sec-holder'>
                <div>
                    <h2 className='greeting'>kurt@portfolio:~$ whoami</h2>
                    <h1 className='name'>Kurt Russel</h1>
                    <h2 className='greeting'>kurt@portfolio:~$ current-status</h2>
                    <h1 className='name'>Computer Engineering Student</h1>
                    <h2 className='greeting'>kurt@portfolio:~$ cat interests.txt</h2>
                    <h1 className='name'>Data Science | Linux Enthusiast | Dev</h1>
                </div>
                <div>
                    <img className='pose' src={pose}></img>
                </div>
            </div>
        </section>
    )
}