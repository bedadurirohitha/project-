import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ cart }) => {

  return (

    <div className='bg-black text-white p-5 flex justify-between'>

      <h1 className='text-3xl font-bold'>
        ShopEasy
      </h1>

      <div className='flex gap-8 text-xl'>

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">

          Cart ({cart.length})

        </Link>

      </div>

    </div>
  )
}

export default Navbar