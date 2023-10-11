import React from 'react'
import { useShoppi } from '../hooks/useShoppi'
import { Link } from 'react-router-dom'

function SignIn() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUserName,
    setCheckedPerson,
  } = useShoppi()

  const handleSubmit = (e) => {
    e.preventDefault()
    setCheckedPerson(true)
  }
  return (
    <main className="grid justify-center justify-items-center pt-[20%] dark:text-slate-100">
      <h1 className="text-5xl font-black text-green-400 dark:text-emerald-400">
        Sign In
      </h1>
      <article className="grid gap-2 py-5 text-center text-base font-semibold">
        <p>bienvenidos a mi fake shoppi</p>
        <p>antes de hacer cualquie compra completa la siguiente informacion</p>
      </article>

      <form
        onSubmit={handleSubmit}
        className="grid gap-3 rounded-xl bg-gray-400 p-2 dark:bg-slate-800"
      >
        <div className=" space-x-2 text-base font-medium ">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            className=" w-11/12 rounded-xl bg-slate-200 dark:bg-slate-700 "
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className=" space-x-2 text-base font-medium ">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            className=" w-11/12 rounded-xl bg-slate-200 dark:bg-slate-700"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className=" space-x-2 text-base font-medium ">
          <label htmlFor="password">Contraseña:</label>
          <input
            className=" w-11/12 rounded-xl bg-slate-200 dark:bg-slate-700"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Link to={'/My-Account'} className="flex justify-center ">
          <button
            type="submit"
            className="h-9 px-9 space-x-2 justify-self-center rounded-xl bg-slate-200 text-center text-base font-medium hover:bg-green-400 hover:text-slate-100 dark:bg-slate-700 dark:hover:bg-green-400"
          >
            Iniciar Sesión
          </button>
        </Link>
      </form>
    </main>
  )
}

export { SignIn }
