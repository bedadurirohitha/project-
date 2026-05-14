import React from 'react'

const ProductCard = ({ product, addToCart }) => {

  return (

    <div className='border p-4 rounded-lg shadow-lg bg-white'>

      <img
        src={product.image}
        alt={product.title}
        className='h-40 mx-auto object-contain'
      />

      <h2 className='font-bold mt-3'>
        {product.title}
      </h2>

      <p className='text-green-600 font-bold mt-2'>
        ${product.price}
      </p>

      <button

        onClick={() => addToCart(product)}

        className='bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700'
      >
        Add To Cart
      </button>

    </div>
  )
}

export default ProductCard