
import React, { useEffect } from 'react'
import '../styles/modal.css'
import { useForm } from 'react-hook-form'

const defaultValue = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
}

const Modal = ({ visibleModal, setVisibleModal, createUser, updateInfo, setUpdateInfo, updateUser }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            var r = confirm(`Do you want to update the data of the user with ID#${data.id}?`);
            if (r == true) {
                updateUser(data)
            } else {
                handleCloseModal()
            }
        } else {
            var r = confirm('Do you want create a new User?');
            if (r == true) {
                createUser(data)
            } else {
                handleCloseModal()
            }
        }
        setVisibleModal('')
        reset(defaultValue)
        setUpdateInfo()
    }

    const handleCloseModal = () => {
        setVisibleModal('')
        reset(defaultValue)
        setUpdateInfo()
    }

    return (
        <div className={`modal ${visibleModal}`} id="modal1 ">
            <div className="modal-dialog">
                <header className="modal-header">
                    {updateInfo ? 'Update User Information' : 'Create New User'}
                    <button onClick={handleCloseModal} className="close-modal" aria-label="close modal" data-close>✕</button>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='inputModal'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' {...register("email")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' {...register("password")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='first_name'>First name:</label>
                        <input type='text' id='first_name' {...register("first_name")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='last_name'>Last Name:</label>
                        <input type='text' id='last_name' {...register("last_name")} />
                    </div>
                    <div className='inputModal'>
                        <label htmlFor='birthday'>Birthday:</label>
                        <input type='date' id='birthday' {...register("birthday")} />
                    </div>
                    <button>{updateInfo ? 'Update' : 'Create'}</button>
                </form>
                <footer className="modal-footer">
                    Introduce User info
                </footer>
            </div>
        </div>
    )
}

export default Modal