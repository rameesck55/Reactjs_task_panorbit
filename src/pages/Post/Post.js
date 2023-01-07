import React from 'react'
import './Post.css'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Chatbox from '../../components/Chatbox/Chatbox'

function Post() {
    return (
        <div className='Post'>
            <Menu selected="Posts" />
            <div id='rowAlign' className='row'>
                <div className='col-lg-12'> <Header heading={"Post"} /><hr className='breaks_in' /></div>
                <div className='col-lg-12' id='empty'><h1 className='string_in_empty'>Coming Soon</h1></div>
            </div>
            <div className='row'>
                <div className='col-lg-6'> </div>
                <div className='chatsdiv'><Chatbox />
                </div>
            </div>
        </div>
    )
}

export default Post