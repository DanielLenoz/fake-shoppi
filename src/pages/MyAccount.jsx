import React, { useState } from 'react'
import {
  BsPersonCircle,
  BsFillCartFill,
  BsFillPersonFill,
  BsArrowBarRight,
  BsFillGeoAltFill,
} from 'react-icons/bs'
import { useShoppi } from '../hooks/useShoppi'
import { Link, useNavigate } from 'react-router-dom'

function MyAccount() {
  const { userName, order, email, ubicacion, setCheckedPerson } = useShoppi()
  const navigate = useNavigate()

  const [detail, setDetail] = useState(false)
  const [ubication, setUbication] = useState(false)

  const getOut = () => {
    setCheckedPerson(false)
    navigate('/')
  }

  return (
    <main className="grid justify-center pt-14 dark:text-slate-100">
      <h1 className='dark:text-emerald-400" dark:text-emerald-400" mb-1 text-5xl font-black text-green-400'>
        My Account
      </h1>
      <section className="flex items-center space-x-3 py-7 text-sm font-light">
        <BsPersonCircle className="h-20 w-20" />
        <p className=" text-2xl font-semibold">{userName}</p>
      </section>
      <section className="grid gap-7 text-base font-light md:text-xl">
        <article className="flex items-center justify-between">
          <Link to={'/my-orders'} className="flex items-center space-x-3">
            <BsFillCartFill className="h-7 w-7" />
            <p>My orders</p>
          </Link>
          <span>{order.length}</span>
        </article>
        <article onClick={() => setDetail(!detail)}>
          <div className="flex items-center space-x-3">
            <BsFillPersonFill className="h-7 w-7" />
            <p>My Details</p>
          </div>
          {!!detail && (
            <article className="ml-9 font-medium">
              <p>
                Email: <span className=" font-light">{email}</span>
              </p>
              <p>
                Defaoult bank: <span className=" font-light">BBVA</span>
              </p>
            </article>
          )}
        </article>
        <article onClick={() => setUbication(!ubication)}>
          <div className="flex items-center space-x-3">
            <BsFillGeoAltFill className="h-7 w-7" />
            <p>My Address book</p>
          </div>
          {!!ubication && (
            <p className=" ml-9 font-medium">
              <span>
                You location: <span className=" font-light">{ubicacion}</span>
              </span>
            </p>
          )}
        </article>
        <article
          className="flex items-center space-x-3"
          onClick={() => getOut()}
        >
          <BsArrowBarRight className="h-7 w-7" />
          <p>sign Out</p>
        </article>
      </section>
    </main>
  )
}

export { MyAccount }
