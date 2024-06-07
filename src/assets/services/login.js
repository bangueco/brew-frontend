import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/login'

const Login = async (username, password) => {
  try {
    const login = await axios.post(baseURL, {username, password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return login.data.token
    
  } catch(error) {
    return error.response.data
  }
}

export default Login