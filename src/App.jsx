import { HashRouter, Route, Routes } from 'react-router-dom'
import { ShoppiPrivider } from './hooks/useShoppi'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import { Area } from './pages/Area'
import { MyAccount } from './pages/MyAccount'
import { MyOrders } from './pages/MyOrders'
import { SignIn } from './pages/SignIn'
import { MyOrder } from './pages/MyOrder'
import { ProductDetail } from './components/ProductDetail'
import { CheckoutSideMenu } from './components/CheckoutSideMenu'

function App() {
  return (
    <>
      <HashRouter>
        <ShoppiPrivider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Area />} />
            <Route path="/My-Account" element={<MyAccount />} />
            <Route path="/My-Orders" element={<MyOrders />} />
            <Route path="/My-Orders/last" element={<MyOrder />} />
            <Route path="/My-Orders/:id" element={<MyOrder />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/*" element={<p>no se encuentra</p>} />
          </Routes>
          <ProductDetail />
          <CheckoutSideMenu />
        </ShoppiPrivider>
      </HashRouter>
    </>
  )
}

export default App
