import '../style/card.css'
import logo from '../assets/logo_head.png'
import { FaPython,   } from "react-icons/fa"
import { SiTensorflow, SiJavascript } from "react-icons/si"

export const Card = () => {
    return (
        <div className='card'>
            <div className='card-logo-wrapper'>
                <div className='card-diamond'>
                    <div className='card-logo'>
                        <div className='card-logo-content'>
                            <img className='logo' src={logo} alt="logo"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-text'>
                <h2 className='card-name'>PROJECT 1</h2>
                <p className='card-description'>Boots blessed with enchantments to allow for swift movements. Useful in uncertain times such as these.</p>
            </div>
            <div className='card-tech'>
                <ul className='card-tech-list'>
                    <li>
                        <FaPython size={25}/>
                    </li>
                    <li>
                        <SiTensorflow size={25}/>
                    </li>
                    <li>
                        <SiJavascript size={25}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}