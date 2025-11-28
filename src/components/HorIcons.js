import "../style/components/horicons.css"

export const HorIcons = ({items, gap}) => {
    return (
        <div className='hor-icon'>
            <ul className='hor-icon-items' style={{gap: `${gap}px`}}>
                {items.map((item) => {
                    return <li>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.logo}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}