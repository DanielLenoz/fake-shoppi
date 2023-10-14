import React, { createContext, useContext, useEffect, useState } from 'react'

const ShoppiContext = createContext()

function ShoppiPrivider({ children }) {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)
  
  const storedThemes = localStorage.getItem('theme')
  const [themes, setTemes] = useState(storedThemes === 'dark')
  
  const [menuActive, setMenuActive] = useState(false)
  const [detailProduct, setDetailProduct] = useState(false)
  const [checkoutSideMenu, setCheckoutSideMenu] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filterData, setfilterData] = useState([])
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [checkedPerson, setCheckedPerson] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }
  const toggleTheme = () => {
    setTemes(!themes)
    localStorage.setItem('theme', !themes ? 'dark' : 'light')
  }

  const toggleDetailProduct = () => {
    setDetailProduct(!detailProduct)
    setCheckoutSideMenu(false)
  }

  const toggleCheckoutSideMenu = () => {
    setCheckoutSideMenu(!checkoutSideMenu)
    setDetailProduct(false)
  }
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?limit=400&offset=10')
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  useEffect(() => {
    if (themes) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [themes])

  return (
    <ShoppiContext.Provider
      value={{
        items,
        menuActive,
        themes,
        cartProducts,
        count,
        detailProduct,
        productToShow,
        checkoutSideMenu,
        order,
        filterData,
        searchValue,
        userName,
        email,
        password,
        checkedPerson,
        ubicacion,
        toggleMenu,
        toggleTheme,
        toggleDetailProduct,
        toggleCheckoutSideMenu,
        setCartProducts,
        setCount,
        setDetailProduct,
        setProductToShow,
        setCheckoutSideMenu,
        setOrder,
        setfilterData,
        setSearchValue,
        setUserName,
        setEmail,
        setPassword,
        setUbicacion,
        setCheckedPerson,
      }}
    >
      {children}
    </ShoppiContext.Provider>
  )
}

function useShoppi() {
  return useContext(ShoppiContext)
}

export { useShoppi, ShoppiPrivider }
