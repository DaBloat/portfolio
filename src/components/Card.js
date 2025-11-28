import '../style/components/card.css'
import { HorIcons } from './HorIcons'

export const Card = ({project}) => {
    return (
        <div className='card'>
            <div className='card-logo-wrapper'>
                <div className='card-diamond'>
                    <div className='card-logo'>
                        <div className='card-logo-content'>
                            <img className='logo' src={project.logo} alt="logo"></img>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='card-name'>{project.name}</h2>
            <p className='card-description'>{project.desc}</p>
            <HorIcons items={project.stack} gap={20}/>
        </div>
    )
}