import './Home.css'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import getUserInfo from '../../services/user_info'
import drinks from '../../services/drinks'

import Items from '../../components/Items'

const Home = () => {

  const navigate = useNavigate()
  const [authenticatedUser, setAuthenticatedUser] = useState({})
  const [products, setProducts] = useState([])

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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 20, gap: 50, border: '1px solid red'}}>
        <h1>Welcome, {authenticatedUser.username}!</h1>
        <div style={{display: 'flex', gap: 20}}>
          {products.map(prod => (
            <Items
              key={prod.id}
              id={prod.id}
              name={prod.name}
              price={prod.price}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home