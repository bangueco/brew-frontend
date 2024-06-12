import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/register'

const register = async (first_name, last_name, username, password) => {
  const response = await axios.post(baseURL, {first_name, last_name, username, password}, {
    headers: {
      "Content-Type": 'application/json'
    }
  })

  return response
}

export default register