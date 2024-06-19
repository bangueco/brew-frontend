import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import drinks from "../../services/drinks"

const Buy = () => {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')

  const fetchProduct = async (id) => {
    const product = await drinks.getDrink(id)

    setProductName(product.name)
    setProductPrice(product.price)
    return
  }

  useEffect(() => {
    fetchProduct(params.get('id'))
  })

  return (
    <form>
      <div>
        <h1>Product Name: </h1>
        <p>{productName}</p>
      </div>
      <div>
        <h1>Price: </h1>
        <p>{productPrice}</p>
      </div>
      <div>
        <h1>Payment Method</h1>
        <select name="paymentMethod" id="paymentMethod">
          <option value="creditCard">Paymaya</option>
          <option value="paypal">GCASH</option>
          <option value="bankTransfer">Cash On Delivery</option>
        </select>
      </div>
      <div>
        <h1>Shipping Address</h1>
        <label htmlFor="addressLine1">Address Line 1:</label>
        <input type="text" id="addressLine1" name="addressLine1" required />
        <br />
        <label htmlFor="addressLine2">Address Line 2:</label>
        <input type="text" id="addressLine2" name="addressLine2" />
        <br />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />
        <br />
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" required />
        <br />
        <label htmlFor="zipCode">Zip Code:</label>
        <input type="text" id="zipCode" name="zipCode" required />
      </div>
      <button>Buy Now</button>
    </form>
  )
}

export default Buy