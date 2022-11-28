import React from 'react'
import './Profile.css'
import Swal from 'sweetalert2'

export default function Profile() {




  return (
    <>
    <div className='container-profilepage'>
        <div className='card-profilecontainer'>
        <div className='tittle-profile'>
            <h4>My Profile</h4>
        </div>
        <div className='img-profile'>
            <img src="https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png" alt="" />
        </div>
        <div className='information-container12'>
            <h4> Name :</h4>
            <h4> Last Name:</h4>
            <h4> Role: </h4>
            <h4> Age: </h4>
            <h4> Email: </h4>
            <h4> Password: </h4>

            <button> Edit</button>
        </div>
        </div>
    </div>
    </>

  )
}
