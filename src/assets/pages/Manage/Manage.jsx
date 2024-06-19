import { useState } from 'react'
import './Manage.css'
import { Link } from "react-router-dom"
import drinks from '../../services/drinks'

const Manage = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const onClickCreateProduct = async () => {
    try {
      const newProduct = await drinks.createDrinks(name, price)
      alert('Product created successfully')
      window.location.reload()
      return newProduct
    } catch (error) {
      alert(error)
      window.location.reload()
    }
  }

  return (
    <div className='manage-container'>
      <Link to="/">Go back</Link>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" name="name" id="name" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button onClick={onClickCreateProduct}>Submit</button>
    </div>
  )
}

export default Manage