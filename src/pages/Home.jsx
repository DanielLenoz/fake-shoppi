import React, { useEffect } from 'react'
import { Cards } from '../components/Cards'
import { useShoppi } from '../hooks/useShoppi'
import { Search } from '../components/Search'

function Home() {
  const {
    items,
    cartProducts,
    setCartProducts,
    count,
    filterData,
    searchValue,
    setCount,
    setProductToShow,
    setDetailProduct,
    setCheckoutSideMenu,
    setfilterData,
    setSearchValue,
    toggleDetailProduct,
    checkedPerson,
  } = useShoppi()

  useEffect(() => {
    const nuevosDatosFiltrados = items.filter(
      (data) =>
        data.title.toLowerCase().includes(searchValue) ||
        data.description.toLowerCase().includes(searchValue),
    )
    setfilterData(nuevosDatosFiltrados)
  }, [searchValue])

  const data = filterData.length > 0 ? filterData : items

  return (
    <main className="grid justify-center justify-items-center gap-5 bg-slate-100 px-5 pt-9 dark:bg-slate-900 lg:pt-16 ">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <section className="px-5dark:bg-slate-900 grid justify-center justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        {data.length > 0 ? (
          data.map((items) => (
            <Cards
              key={items.id}
              checkedPerson={checkedPerson}
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
          ))
        ) : (
          <p>no se encuentra</p>
        )}
      </section>
    </main>
  )
}

export { Home }
