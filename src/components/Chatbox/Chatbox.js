import React, { useState } from 'react'
import './Chatbox.css'


function Chatbox() {
    const [person, setperson] = useState(JSON.parse(localStorage.getItem("allfriends")))
    const [chatting, setchatting] = useState(false)
    const chat_calling = () => {
        setchatting(!chatting)
    }

    return (
        <div>
            {chatting ?
                <div className='persons'>
                    {person.map((friends) => (
                        <div className='person1'>
                            <div className='avata'><img className='snap' src={friends?.profilepicture} alt="piic" /></div>
                            <div className='nameinchat'><h3 className='nameinchatbox'>{friends?.name}</h3></div>
                        </div>
                    ))}
                </div>
                :
                ""
            }
            <div className='friends'>
                <h5 className='chats' onClick={chat_calling}>Chats</h5>
            </div>
        </div>
    )
}

export default Chatbox