import React from 'react'
import { useShoppi } from '../hooks/useShoppi'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUserName,
    ubicacion,
    setUbicacion,
    setCheckedPerson,
  } = useShoppi()
  const navigate = useNavigate()

  const formFields = [
    {
      label: 'Nombre de Usuario:',
      type: 'text',
      id: 'username',
      value: username,
      onChange: (e) => setUserName(e.target.value),
    },
    {
      label: 'Correo Electrónico:',
      type: 'email',
      id: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: 'Contraseña:',
      type: 'password',
      id: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      label: 'Ubicación de entrega:',
      type: 'text',
      id: 'ubicacion',
      value: ubicacion,
      onChange: (e) => setUbicacion(e.target.value),
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setCheckedPerson(true)
    navigate('/My-Account')
  }
  return (
    <main className="grid justify-center justify-items-center pt-[20%] dark:text-slate-100 lg:pt-[10%]">
      <h1 className="text-5xl font-black text-green-400 dark:text-emerald-400">
        Sign In
      </h1>
      <article className="grid gap-2 py-5 text-center text-base font-semibold lg:text-lg">
        <p>bienvenidos a mi fake shoppi</p>
        <p>antes de hacer cualquie compra completa la siguiente informacion</p>
      </article>

      <form
        onSubmit={handleSubmit}
        className="grid gap-3 rounded-xl bg-gray-400 p-2 dark:bg-slate-800"
      >
        {formFields.map((field, index) => (
          <div key={index} className="space-x-2 text-base font-medium">
            <label htmlFor={field.id}>{field.label}</label>
            <input
              className="w-11/12 rounded-xl bg-slate-200 pl-2 dark:bg-slate-700"
              type={field.type}
              id={field.id}
              value={field.value}
              onChange={field.onChange}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="h-9 space-x-2 justify-self-center rounded-xl bg-slate-200 px-9 text-center text-base font-medium hover:bg-green-400 hover:text-slate-100 dark:bg-slate-700 dark:hover:bg-green-400 lg:text-lg"
        >
          Iniciar Sesión
        </button>
      </form>
    </main>
  )
}

export { SignIn }
