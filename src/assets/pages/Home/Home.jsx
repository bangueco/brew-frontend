import './Home.css'
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login', {replace: true})
    } else {
      navigate('/', {replace: true})
    }
  }, [navigate])

  return(
    <>
      <Navbar />
      <h1>This is the main page, Welcome</h1>
    </>
  )
}

export default Home