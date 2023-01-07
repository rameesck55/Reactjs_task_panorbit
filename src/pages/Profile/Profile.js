import React, { useState } from 'react'
import Address from '../../components/Address/Address'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails'
import './Profile.css'
import Chatbox from '../../components/Chatbox/Chatbox'



function Profile() {
  const [statess, setStatess] = useState(JSON.parse(localStorage.getItem("data_selected_person")) || [])

  return (
    <>
      <div className='profilepage'>
        <Menu selected="Profile" />
        <div id='rowAlign' className='row'>
          <div className='col-lg-12'> <Header heading={"Profile"} /><hr className='breaks_in' /></div>
          <div className='col-lg-5'><PersonalDetails /> <br /></div>
          <div className='col-lg-7'>
            <Address />
            <br />
            <div className='maps'>
              <iframe className='Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <br />
            <div className='location_point'>
              <h3 > <span className='Lat'> Lat :</span> {statess?.address.geo.lat}</h3>
              <h3 > <span className='Lat'>Long :</span> {statess?.address.geo.lng}</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'> </div>
          <div className='chatsdiv'><Chatbox />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile