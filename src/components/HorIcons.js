import "../style/components/horicons.css"

export const HorIcons = ({items, itemStyle}) => {
    return (
        <div className='hor-icon'>
            <ul className='hor-icon-items' style={{...itemStyle}}>
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