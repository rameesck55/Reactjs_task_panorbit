import React, { useState } from 'react'
import './Address.css'

function Address() {
  const [statee, setstatee] = useState(JSON.parse(localStorage.getItem("data_selected_person")) || [])

  return (
    <div>
      <div className='address-bar'><h2 className='address_bar'>Address :</h2></div>
      <br />
      <div className='contents_in_address'>
        <div className='classinform'>
          <div className='right'><p className='headondetailform'>Street : </p></div>
          <div className='left'><span className='detailsinform'> {statee?.address.street}</span></div>
        </div>
        <div className='classinform'>
          <div className='right'><p className='headondetailform'>Suit : </p></div>
          <div className='left'><span className='detailsinform'> {statee?.address.suite}</span></div>
        </div>
        <div className='classinform'>
          <div className='right'><p className='headondetailform'>City : </p></div>
          <div className='left'><span className='detailsinform'> {statee?.address.city}</span></div>
        </div>
        <div className='classinform'>
          <div className='right'><p className='headondetailform'>Zipcode : </p></div>
          <div className='left'><span className='detailsinform'> {statee?.address.zipcode}</span></div>
        </div>
      </div>
    </div>
  )
}

export default Address