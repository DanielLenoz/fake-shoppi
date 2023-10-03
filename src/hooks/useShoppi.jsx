import React, { createContext, useContext, useEffect, useState } from 'react'

const ShoppiContext = createContext()

function ShoppiPrivider({ children }) {
    const [items, setItems] = useState([])
    
    const [count, setCount] = useState(0)

  const storedThemes = localStorage.getItem('theme')

  const [menuActive, setMenuActive] = useState(false)

  const [cartProducts, setCartProducts] = useState([])

    const [themes, setTemes] = useState(storedThemes === 'dark')
    
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }
  const toggleTheme = () => {
    setTemes(!themes)
    localStorage.setItem('theme', !themes ? 'dark' : 'light')
  }

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
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

  console.log(items)
  return (
    <ShoppiContext.Provider
      value={{
        items,
        menuActive,
        themes,
        cartProducts,
        count,
        toggleMenu,
        toggleTheme,
        setCartProducts,
        setCount,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        closeProductDetail,
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
