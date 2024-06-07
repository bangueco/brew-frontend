import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/login'

const Login = async (username, password) => {
  const response = await axios.post(baseURL, {username, password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return response.data
}

export default Login