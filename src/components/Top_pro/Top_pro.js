import React, { useState } from 'react'
import './Top_pro.css'
import { Link } from 'react-router-dom'
function Top_pro() {
    const [statees, setStatees] = useState(JSON.parse(localStorage.getItem("data_selected_person")) || [])
    return (
        <div className='Top_pro'>
            <div className='photo'><img className='Top-image' src={statees.profilepicture} alt="photo" /></div>
            <div className='EMAIL'><h2 className='top_email'>{statees.email}</h2></div>
            <div><button className='signout'><Link className='linkintop' to={'/'} >signout</Link> </button></div>
        </div>
    )
}

export default Top_pro