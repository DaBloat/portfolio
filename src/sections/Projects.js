import { Card } from '../components'
import '../style/projects.css'

export const Projects = () => {
    return(
        <section id='projects' className="section project-sec">
            <div className='project-text'>
                <h3 className='header-command'>kurt@portfolio:~$ cd Projects</h3>
                <h1 className='header-text'>Projects</h1>
            </div>
            <div className='project-carousel'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}