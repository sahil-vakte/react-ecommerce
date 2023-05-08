import React from 'react'
import "./ProductPage.css"
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <div>ProductPage
    <div>
        <Link to="/">
          <h2 style={{ cursor: "pointer" }}>Home Page</h2>
        </Link>
      </div>
    </div>
  )
}

export default ProductPage