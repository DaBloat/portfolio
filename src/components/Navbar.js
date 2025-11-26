import logo_head from "../assets/logo_head.png"
import '../style/navbar.css'

export const Navbar = () => {
    return(
        <header>
            <nav className="nav">
                <div className="nav-logo">
                    <img src={logo_head} alt='logo-head' className="logo-head"></img>
                </div>
                <ul className="navlinks">
                    <li>
                        <a href="#me">HOME</a>
                    </li>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#achievements">ACHIEVEMENTS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT ME</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}