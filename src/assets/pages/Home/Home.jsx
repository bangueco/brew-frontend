import './Home.css'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import getUserInfo from '../../services/user_info'
import drinks from '../../services/drinks'

const Home = () => {

  const navigate = useNavigate()
  const [authenticatedUser, setAuthenticatedUser] = useState({})
  const [products, setProducts] = useState({})

  const getAuthenticatedUser = async () => {
    const user = await getUserInfo()
    return setAuthenticatedUser(user.userData)
  }

  const getDrinks = async () => {
    const productDrinks = await drinks.getDrinks()
    return setProducts(productDrinks)
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

  useEffect(() => {
    getDrinks()
  }, [])

  return(
    <>
      <Navbar />
      <h1>This is the main page, Welcome {authenticatedUser.username}</h1>
    </>
  )
}

export default Home