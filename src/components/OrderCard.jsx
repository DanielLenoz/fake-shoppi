import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

function OrderCard({ id, title, imageUrl, price, handleDelete }) {
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = (
      <RiCloseFill
        onClick={() => handleDelete(id)}
        className="h-6 w-6 cursor-pointer text-black dark:text-white"
      />
    )
  }
  return (
    <section className="mb-3 pr-4 flex items-center justify-between dark:bg-slate-800 rounded-xl bg-slate-200">
      <article className="flex items-center gap-2">
        <figure className="h-20 w-20">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </article>
      <article className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderXMarkIcon}
      </article>
    </section>
  )
}

export { OrderCard }
