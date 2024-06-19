import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/drinks'

const getDrinks = async () => {
  const response = await axios.get(baseURL)

  return response.data
}

const getDrink = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`)
  
  return response.data
}

const createDrinks = async (name, price) => {
  const response = await axios.post(baseURL, {name: name, price: price})

  return response.data
}

export default { getDrinks, getDrink, createDrinks }