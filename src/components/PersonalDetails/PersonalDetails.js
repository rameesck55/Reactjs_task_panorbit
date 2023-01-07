import React, { useState } from 'react'
import './PersonalDetails.css'


function PersonalDetails() {
    const [state, setstate] = useState(JSON.parse(localStorage.getItem("data_selected_person")) || [])
    return (
        <div className='PersonalDetails'>
            <div className='row'>
                <div className="col-lg-10">
                    <div className="personals">
                        <img className='imageinpersonals' src={state?.profilepicture} alt="person" />
                        <p className='name_in_personals'>{state?.name}</p>
                    </div>
                    <div className='detailform'>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>Username : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.username}</span></div>
                        </div>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>E-mail : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.email}</span></div>
                        </div>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>Phone : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.phone}</span></div>
                        </div>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>Website : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.website}</span></div>
                        </div>
                        <hr className='breaks' />
                    </div>
                    <div className='addressinpro'>
                        <h3 style={{ textAlign: 'center', color: 'rgba(161, 154, 167, 0.5)', fontSize: '25px' }}>Company</h3>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>Name : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.company.name}</span></div>
                        </div>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>catchphrase : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.company.catchPhrase}</span></div>
                        </div>
                        <div className='classinform'>
                            <div className='right'><p className='headondetailform'>bs : </p></div>
                            <div className='left'><span className='detailsinform'> {state?.company.bs}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails