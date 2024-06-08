import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/drinks'

const getDrinks = async () => {
  const response = await axios.get(baseURL)

  return response.data
}

export default { getDrinks }