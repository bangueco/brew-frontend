import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/users/info'

const getUserInfo = async () => {

  const token = localStorage.getItem('token')

  const response = await axios.post(baseURL, {}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  return response.data
}

export default getUserInfo