import React, { useState } from 'react'
import './Header.css'
import Top_pro from '../Top_pro/Top_pro'

function Header({ heading }) {
  const [Top, setTop] = useState(false)
  const [states, setstates] = useState(JSON.parse(localStorage.getItem("data_selected_person")) || [])

  const top_Profile = () => {
    setTop(!Top)
  }
  return (
    <div className='Header'>
      <div className="row">
        <div className="col-lg-3">
          <div className='top-section'>
            <p className='section-name'>{heading}</p>
          </div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-5" id='avatarId'>
          <div className='header_avatar'>
            <img className='header-avatar' onClick={top_Profile} src={states?.profilepicture} alt="ava" />
            <div className='name_onAvatar'> <p className='Header-name' onClick={top_Profile}>{states?.name}</p></div>
          </div>
        </div>
        {Top ? <Top_pro />
          :
          ""}
      </div>
    </div>
  )
}

export default Header