import React from 'react'
import { BiPlus, BiCheck } from 'react-icons/bi'

function Cards({
  data,
  cartProducts,
  setCartProducts,
  count,
  setCount,
  setDetailProduct,
  setProductToShow,
}) {
  console.log(data)

  const showProduct = (productDetail) => {
    setDetailProduct(true)
    setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, productData])
    //   openCheckoutSideMenu()
    //   closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0

    if (isInCart) {
      return (
        <div className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-black p-1">
          <BiCheck className="h-6 w-6 cursor-pointer text-white"></BiCheck>
        </div>
      )
    } else {
      return (
        <div
          className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <BiPlus className="h-6 w-6 cursor-pointer text-black"></BiPlus>
        </div>
      )
    }
  }

  return (
    <section className="grid justify-center justify-items-center gap-5 px-5 pt-9 md:grid-cols-3 lg:grid-cols-4 lg:pt-16">
      {data.map((data) => {
        return (
          <div
            className="h-60 w-56 cursor-pointer rounded-lg bg-white dark:bg-slate-700 dark:text-slate-100 p-2"
            key={data.id}
            onClick={() => showProduct(data)}
          >
            <figure className="relative mb-2 h-4/5 w-full">
              <span className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
                {data.category.name}
              </span>
              <img
                className="h-full w-full rounded-lg object-cover"
                src={data.images[0]}
                alt={data.title}
              />
              {renderIcon(data.id)}
              {/* <div
                className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1"
                onClick={(event) => addProductsToCart(event, data.data)}
              >
                <BiPlus className="h-6 w-6 text-black"></BiPlus>
              </div> */}
            </figure>
            <p className="flex justify-between">
              <span className="text-sm font-light">{data.title}</span>
              <span className="text-lg font-medium">${data.price}</span>
            </p>
          </div>
        )
      })}
    </section>
  )
}

export { Cards }
