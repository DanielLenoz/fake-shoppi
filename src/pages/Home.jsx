import React from 'react'
import { Cards } from '../components/Cards'
import { useShoppi } from '../hooks/useShoppi'

function Home() {
  const { items } = useShoppi()
console.log(items);
  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <Cards data={items} />
    </main>
  )
}

export { Home }
