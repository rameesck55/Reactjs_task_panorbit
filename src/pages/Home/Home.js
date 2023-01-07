import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [Employees, setEmployees] = useState([])

 // API calling, stored the datas in local storage

  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json').then((response) => {
      const a = response.data.users
      const afteredit = a.filter((named) => {
        return named.id !== 1
      })
      setEmployees(afteredit)
      localStorage.setItem('allfriends', JSON.stringify(afteredit))
    })
  }, [])
  
 // on clicking the profile moves to profile router

  const correspondinEmploy = (person) => {
    localStorage.setItem('data_selected_person', JSON.stringify(person))
    navigate('/Profile')
  }

  return (

    <div className='Home'>
      <div className='container'>
        <div className='heading'>
          <h2 className='account_selection'>Select an account</h2>
        </div>
        {Employees.map((value) => (
          <>
            <div className='profiles'>
              <div className='avatar'>
                <img className='images' onClick={() => { correspondinEmploy(value) }} src={value?.profilepicture} alt="avatar" />
              </div>
              <div>
                <p onClick={() => { correspondinEmploy(value) }} className='name_in_profile'>
                  {value?.name}
                </p>
              </div>
            </div>
            <hr className='junction_line' />
          </>
        ))}
      </div>
    </div>
  )
}

export default Home