import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useShoppi } from '../hooks/useShoppi'
import { OrderCard } from './OrderCard'
import { totalPrice } from '../utils'
import { Link } from 'react-router-dom'

function CheckoutSideMenu() {
  const {
    count,
    checkoutSideMenu,
    toggleCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setCount,
    setOrder,
    order,
  } = useShoppi()

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id)
    setCartProducts(filteredProducts)
    setCount(count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }
    setCount(0)
    setOrder([...order, orderToAdd])
    setCartProducts([])
    toggleCheckoutSideMenu()
    // setSearchByTitle(null)
  }

  return (
    <>
      {checkoutSideMenu && (
        <aside className=" fixed right-0 top-0 z-10 h-screen w-screen border-2 border-slate-500 bg-slate-100 dark:bg-slate-700 dark:text-slate-100 md:w-1/3 ">
          <section className="relative top-8 h-screen px-3 lg:top-16 ">
            <section className="flex items-center justify-between py-2">
              <h2 className="text-xl font-medium">My Order</h2>
              <RiCloseFill
                className="h-6 w-6 cursor-pointer"
                onClick={() => toggleCheckoutSideMenu()}
              />
            </section>

            <article className="h-3/4 overflow-y-scroll">
              {cartProducts.map((product) => (
                <OrderCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
                  handleDelete={handleDelete}
                />
              ))}
            </article>

            <div className=" absolute bottom-9 w-11/12 pb-3 lg:bottom-16">
              <p className="mb-2 flex items-center justify-between">
                <span className="text-base font-bold lg:text-lg">Total:</span>
                <span className="text-2xl font-medium">
                  ${totalPrice(cartProducts)}
                </span>
              </p>
              <Link to="/my-orders/last">
                <button
                  className="w-full rounded-lg bg-black py-3 text-base text-white lg:text-lg"
                  onClick={() => handleCheckout()}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </section>
        </aside>
      )}
    </>
  )
}

export { CheckoutSideMenu }
