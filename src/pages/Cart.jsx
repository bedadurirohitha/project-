import React from 'react'

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity
}) => {

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  return (

    <div className='p-5 bg-gray-100 min-h-screen'>

      <h1 className='text-4xl font-bold mb-6'>
        Cart Items
      </h1>

      {
        cart.length === 0 ? (

          <h2 className='text-2xl'>
            Your Cart is Empty
          </h2>

        ) : (

          <div>

            {
              cart.map((item) => (

                <div
                  key={item.id}
                  className='bg-white p-5 rounded-lg shadow mb-5 flex flex-col md:flex-row justify-between items-center'
                >

                  <div className='flex items-center gap-5'>

                    <img
                      src={item.image}
                      alt={item.title}
                      className='h-24 w-24 object-contain'
                    />

                    <div>

                      <h2 className='font-bold text-lg'>
                        {item.title}
                      </h2>

                      <p className='text-green-600 font-bold mt-2'>
                        ${item.price}
                      </p>

                    </div>

                  </div>

                  {/* Quantity Buttons */}
                  <div className='flex items-center gap-4 mt-4 md:mt-0'>

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'
                    >
                      -
                    </button>

                    <span className='text-2xl font-bold'>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'
                    >
                      +
                    </button>

                  </div>

                </div>

              ))
            }

            {/* Total Price */}
            <div className='bg-black text-white p-5 rounded-lg text-2xl font-bold text-right'>

              Total: ${totalPrice.toFixed(2)}

            </div>

          </div>

        )
      }

    </div>
  )
}

export default Cart