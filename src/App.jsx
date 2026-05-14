import React, { useState } from 'react'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

import { Routes, Route } from 'react-router-dom'

const App = () => {

  // Cart State
  const [cart, setCart] = useState([])

  // Add To Cart
  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ])

    }
  }

  // Increase Quantity
  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    )
  }

  // Decrease Quantity
  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (

    <div>

      {/* Navbar */}
      <Navbar cart={cart} />

      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <Products addToCart={addToCart} />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />

      </Routes>

    </div>
  )
}

export default App