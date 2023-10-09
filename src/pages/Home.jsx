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
    setDetailProduct,
    setProductToShow,
  } = useShoppi()
  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <Cards
        data={items}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        count={count}
        setCount={setCount}
        setDetailProduct={setDetailProduct}
        setProductToShow={setProductToShow}
      />
    </main>
  )
}

export { Home }
