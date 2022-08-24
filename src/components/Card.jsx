import axios from 'axios'
import React from 'react'


const Card = ({ user, getAllUsers, setUpdateInfo, setVisibleModal }) => {

    const deleteCarById = user => {
        var r = confirm(`Do you want to delete the data of the user with ID#${user.id}?`);
        if (r == true) {
            const url = `https://users-crud1.herokuapp.com/users/${user.id}/`
            axios.delete(url)
                .then(res => {
                    console.log(res.data)
                    getAllUsers()
                })
                .catch(err => console.log(err))
           
        }
    }

    const handleUpdateUser = () => {
        setVisibleModal('is-visible')
        setUpdateInfo(user)
      }


    return (
        <div className='card'>
            <span className='cardTitle'>{user.first_name} {user.last_name}</span>
            <div className='line' />
            <div className="infoCard">
                <div className="infoContainer">
                    <span className='nameLabel'>EMAIL</span>
                    <span className='inputLabel'>{user.email}</span>
                </div>
                <div className="infoContainer">
                    <span className='nameLabel'>BIRTHDAY</span>
                    <span className='inputLabel'><i className="fi fi-rr-cake-birthday"></i>{user.birthday}</span>
                </div>
            </div>
            <div className='line' />
            <div className="footerCard">
                <label htmlFor="">ID user: <strong>{user.id}</strong></label>
                <div className="buttonsContainer">
                    <button className="btn delete" onClick={() => deleteCarById(user)}><i className="fi fi-rr-trash" /></button>
                    <div className="btn edit" onClick={() => handleUpdateUser(user.id)}><i className="fi fi-rr-pencil"></i></div>

                </div>
            </div>
        </div>
    )
}

export default Card