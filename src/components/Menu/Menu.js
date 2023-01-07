import React, { useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'



function Menu({ selected }) {
    const [Data, setData] = useState([
        {
            name: "Profile",
            selected: true,
            to: "/Profile"
        },
        {
            name: "Posts",
            selected: false,
            to: "/Post"
        },
        {
            name: "Gallery",
            selected: false,
            to: "/Gallery"
        },
        {
            name: "ToDo",
            selected: false,
            to: "/ToDo"
        },
    ])

    return (
        <div className='menu'>
            {Data.map(item => (
                <>
                    <div className='menudiv' >
                        <div className='menu_item_active'>
                            <Link className='links' to={item.to}> <h3 className={item.name == selected ? 'menu_selected' : 'menu_text'} > {item.name}</h3> </Link>
                        </div>
                        <div className='breakclass'><hr className='breaks' /></div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Menu