import React from 'react'
import { Cards } from '../components/Cards'
import { useShoppi } from '../hooks/useShoppi'

function Home() {
  const {
    items,
    cartProducts,
    setCartProducts,
    count,
    setCount,
    setProductToShow,
    setDetailProduct,
    setCheckoutSideMenu,
    toggleDetailProduct,
  } = useShoppi()
  return (
    <main className="grid justify-center justify-items-center gap-5 bg-slate-100 px-5 pt-9 dark:bg-slate-900 md:grid-cols-3 lg:grid-cols-4 lg:pt-16">
      {items.map((items) => (
        <Cards
          key={items.id}
          data={items}
          cartProducts={cartProducts}
          count={count}
          setCartProducts={setCartProducts}
          setCount={setCount}
          setProductToShow={setProductToShow}
          setDetailProduct={setDetailProduct}
          setCheckoutSideMenu={setCheckoutSideMenu}
          toggleDetailProduct={toggleDetailProduct}
        />
      ))}
    </main>
  )
}

export { Home }
