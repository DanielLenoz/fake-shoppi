import React from 'react'
import { useShoppi } from '../hooks/useShoppi'
import { Link } from 'react-router-dom'
import { OrdersCard } from '../components/OrdersCard'

function MyOrders() {
  const { order } = useShoppi()

  return (
    <section className="h-screen bg-slate-100 pt-24 dark:bg-slate-900 dark:text-slate-100">
      <section className="grid justify-center ">
        <div className="relative mb-4 flex w-80 items-center justify-center">
          <h1 className="text-xl font-bold lg:text-2xl">My Orders</h1>
        </div>
        {order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </section>
    </section>
  )
}

export { MyOrders }
