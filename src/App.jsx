import axios from 'axios'
import { useState } from 'react'
import '../src/styles/App.css'
import CardsMain from './components/CardsMain'
import Nav from './components/Nav'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [visibleModal, setVisibleModal] = useState('')

  const getAllUsers = () => {
    const url = 'https://users-crud1.herokuapp.com/users/'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Nav getAllUsers={getAllUsers}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      visibleModal={visibleModal}
      setVisibleModal={setVisibleModal}

      />
      <CardsMain users={users}
      getAllUsers={getAllUsers}
      setUpdateInfo={setUpdateInfo}
      setVisibleModal={setVisibleModal}
      />
    </div>
  )
}

export default App
