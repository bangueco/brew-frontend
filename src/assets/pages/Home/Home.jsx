import './Home.css'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import getUserInfo from '../../services/user_info'

const Home = () => {

  const navigate = useNavigate()
  const [authenticatedUser, setAuthenticatedUser] = useState({})

  const getAuthenticatedUser = async () => {
    const user = await getUserInfo()
    return setAuthenticatedUser(user.userData)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    
    if (!token) {
      navigate('/login', {replace: true})
    } else {
      getAuthenticatedUser()
      navigate('/', {replace: true})
    }
  }, [navigate])

  return(
    <>
      <Navbar />
      <h1>This is the main page, Welcome {authenticatedUser.username}</h1>
    </>
  )
}

export default Home