import "./AddProduct.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products"
import { useState } from "react";

const AddProduct = (props) => {
  const [product, setProduct] = useState({ 
    name: "",
    imgURL: "",
    description: "",
    price: "",
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
            ...product,
            [name]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({created})
}

  if (isCreated) {
    return <Redirect to={"/products"}/>
  }

  return (
  <Layout user={props.user}>
    <form className="create-form" onSubmit={handleSubmit}>
      <h3>Add Product</h3>
        <input
            className="input-name"
            placeholder='Name'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
        />
        <input
            className="input-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
        />
        <input
            className="input-image-link"
            placeholder='Image Link'
            value={product.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
        />
        <textarea
            className="textarea-description"
            rows={8}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
        />
        <button type='submit' className="submit-button">Add</button>
      </form>
    </Layout>
  )
}

export default AddProduct;