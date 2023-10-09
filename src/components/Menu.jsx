import React from 'react'
import {
  RiMenu3Fill,
  RiCloseFill,
  RiMoonFill,
  RiSunFill,
  RiShoppingCartFill,
} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { useShoppi } from '../hooks/useShoppi'

function Menu() {
  const activeStyle = 'border-b-4 border-green-400 dark:border-emerald-400'

  const { menuActive, themes, toggleMenu, toggleTheme, count } = useShoppi()

  return (
    <header>
      <nav className="fixed top-0 z-30 flex w-screen items-center justify-between bg-slate-100 px-5 dark:bg-slate-900 lg:flex-row-reverse ">
        <div onClick={toggleTheme}>
          {themes ? (
            <RiMoonFill className=" h-8 w-8 fill-white" />
          ) : (
            <RiSunFill className=" h-8 w-8 fill-slate-900" />
          )}
        </div>
        <section className="relative lg:hidden ">
          {!menuActive ? (
            <RiMenu3Fill
              className="absolute -bottom-4 right-0 h-8 w-8 dark:fill-slate-100 "
              onClick={toggleMenu}
            />
          ) : (
            <RiCloseFill
              className="absolute -bottom-4 right-0 h-8 w-8 dark:fill-slate-100 "
              onClick={toggleMenu}
            />
          )}
        </section>

        <section className="z-10 hidden h-16 w-screen justify-between bg-slate-100 pr-7 dark:bg-slate-900 lg:flex">
          <ul className="font-carter flex gap-2 xl:gap-7 text-2xl">
            <li className="text-5xl  font-black text-green-400 dark:text-emerald-400">
              Shoppi
            </li>
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                />
              )
            })}
          </ul>
          <ul className="font-carter flex gap-7 text-2xl">
            {routes2.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                />
              )
            })}
            <li className="flex space-x-2 self-center">
              <RiShoppingCartFill className="h-8 w-8  fill-slate-900 dark:fill-slate-100" />
              <div className=" text-slate-900 dark:text-slate-100">{count}</div>
            </li>
          </ul>
        </section>
      </nav>

      {!!menuActive && (
        <section className="fixed top-0 z-20 w-screen grid h-screen justify-center bg-slate-100 dark:bg-slate-900">
          <ul className="font-carter mt-20 grid  gap-1 text-2xl">
            <li className=" text-center text-5xl font-black text-green-400 dark:text-emerald-400">
              Shoppi
            </li>
            {routes.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                  onClick={() => (toggleMenu(), window.scrollTo(0, 0))}
                />
              )
            })}
          </ul>
          <ul className="font-carter flex gap-7 text-2xl">
            {routes2.map((routes) => {
              return (
                <MuneList
                  key={routes.to}
                  routes={routes}
                  activeStyle={activeStyle}
                />
              )
            })}
          </ul>
        </section>
      )}
    </header>
  )
}

function MuneList({ routes, activeStyle, onClick }) {
  return (
    <li
      className="self-center text-center font-normal dark:text-slate-100"
      key={routes.text}
    >
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : null)}
        to={routes.to}
        onClick={onClick}
      >
        {routes.text}
      </NavLink>
    </li>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/Clothes',
    text: 'Clothes',
  },
  {
    to: '/Electronics',
    text: 'Electronics',
  },
  {
    to: '/Furniture',
    text: 'Furniture',
  },
  {
    to: '/Shoes',
    text: 'Shoes',
  },
]

const routes2 = [
  {
    to: '/MyAccount',
    text: 'MyAccount',
  },
  {
    to: '/SingIn',
    text: 'Sing In',
  },
]

export { Menu, MuneList, routes }
