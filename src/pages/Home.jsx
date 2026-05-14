import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (

    <div className='min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col justify-center items-center text-white'>

      <h1 className='text-6xl font-extrabold mb-6 drop-shadow-lg text-center'>

        Welcome To ShopEasy

      </h1>

      <p className='text-2xl mb-8 font-medium text-center'>

        Discover Amazing Products At Best Prices

      </p>

      <Link to="/products">

        <button className='bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition duration-300 shadow-2xl'>

          Shop Now

        </button>

      </Link>

      <div className='flex gap-8 mt-16 flex-wrap justify-center'>

        <div className='bg-white text-black p-6 rounded-2xl shadow-2xl w-60 text-center'>

          <h2 className='text-2xl font-bold mb-2'>
            Electronics
          </h2>

          <p>
            Latest gadgets and accessories
          </p>

        </div>

        <div className='bg-white text-black p-6 rounded-2xl shadow-2xl w-60 text-center'>

          <h2 className='text-2xl font-bold mb-2'>
            Fashion
          </h2>

          <p>
            Trendy outfits for everyone
          </p>

        </div>

        <div className='bg-white text-black p-6 rounded-2xl shadow-2xl w-60 text-center'>

          <h2 className='text-2xl font-bold mb-2'>
            Jewelery
          </h2>

          <p>
            Elegant collections and designs
          </p>

        </div>

      </div>

    </div>
  )
}

export default Home