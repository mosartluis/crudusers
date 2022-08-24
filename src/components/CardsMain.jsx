import React, { useEffect } from 'react'
import Card from './Card'


const CardsMain = ({ users, getAllUsers, setUpdateInfo, setVisibleModal }) => {

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <section className='CardsContainer'>
      {users &&
        users.map(user =>
          <Card
            key={user.id}
            user={user}
            getAllUsers={getAllUsers}
            setUpdateInfo={setUpdateInfo}
            setVisibleModal={setVisibleModal}
          />)}
    </section>
  )
}

export default CardsMain