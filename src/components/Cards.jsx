import React from 'react'
import { BiPlus, BiCheck } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Cards({
  data,
  user,
  cartProducts,
  setCartProducts,
  count,
  setCount,
  setProductToShow,
  setDetailProduct,
  setCheckoutSideMenu,
  toggleDetailProduct,
}) {
  const navigate = useNavigate()

  const showProduct = (productDetail) => {
    setDetailProduct(true)
    setCheckoutSideMenu(false)
    setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    if (!!user) {
      setCount(count + 1)
      setCartProducts([...cartProducts, productData])
      toggleDetailProduct()
      setCheckoutSideMenu(true)
      console.log(productData)
    } else {
      navigate('/SignIn')
    }
  }
  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0

    if (isInCart) {
      return (
        <div className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-black p-1">
          <BiCheck className="h-6 w-6 cursor-pointer text-white" />
        </div>
      )
    } else {
      return (
        <div
          className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <BiPlus className="h-6 w-6 cursor-pointer text-black" />
        </div>
      )
    }
  }

  return (
    <div
      className="h-60 w-56 cursor-pointer rounded-lg bg-white p-2 dark:bg-slate-700 dark:text-slate-100"
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
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

export { Cards }
