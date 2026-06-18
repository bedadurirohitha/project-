import React, { useEffect, useState } from 'react'

import ProductCard from '../components/Productcard'

const Products = ({ addToCart }) => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {

    const response = await fetch(
      'https://fakestoreapi.com/products'
    )

    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {

    fetchProducts()

  }, [])

  return (

    <div className='p-5 bg-gray-100 min-h-screen'>

      <h1 className='text-4xl font-bold mb-6'>
        Products
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>

        {
          products.map((item) => (

            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
            />

          ))
        }

      </div>

    </div>
  )
}

export default Products