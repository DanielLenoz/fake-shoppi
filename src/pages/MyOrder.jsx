import React from 'react'
import { RiArrowLeftDoubleFill } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import { useShoppi } from '../hooks/useShoppi'
import { OrderCard } from '../components/OrderCard'

function MyOrder() {
  const { order } = useShoppi()
  const { id } = useParams()

  let index = id === undefined ? -1 : id

  return (
    <section className="h-screen bg-slate-100 pt-[14%] dark:bg-slate-900">
      <section className="grid justify-center dark:text-slate-100">
        <div className="relative mb-6 flex w-80 items-center justify-center">
          <h1 className="text-xl font-medium">My Order</h1>
        </div>
        <article>
          {order?.slice(index)[0]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))}
        </article>
        <Link to="/my-orders" className="flex space-x-2">
          <RiArrowLeftDoubleFill className="h-6 w-6 cursor-pointer fill-black dark:fill-slate-100" />
          <p>All my orders</p>
        </Link>
      </section>
    </section>
  )
}

export { MyOrder }
