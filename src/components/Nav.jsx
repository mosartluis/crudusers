import axios from 'axios'
import React, { useState } from 'react'
import Modal from './Modal'

const Nav = ({ getAllUsers, updateInfo, setUpdateInfo, visibleModal, setVisibleModal }) => {


    const createUser = data => {
        const url = 'https://users-crud1.herokuapp.com/users/'
        axios.post(url, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    const updateUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
        axios.patch(URL, data)
          .then(res => {
            console.log(res.data)
            getAllUsers()
          })
          .catch(err => console.log(err))
      }


    return (
        <section className='Nav'>
            <Modal visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                createUser={createUser} 
                updateInfo={updateInfo}
                setUpdateInfo={setUpdateInfo}
                updateUser={updateUser}
                />
            <h1 className='userTitle'>Usuarios</h1>
            <button onClick={() => setVisibleModal('is-visible')} className='createUserButton'>
                <i className="fi fi-rr-plus" />
                <span>Crear nuevo usuario</span>
            </button>

        </section>
    )
}

export default Nav