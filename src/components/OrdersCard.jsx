import React from 'react'
import {
  RiArrowRightDoubleFill,
  RiCalendarCheckFill,
  RiShoppingBagFill,
} from 'react-icons/ri'

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="mb-3 flex w-80 items-center justify-between rounded-lg border border-black bg-slate-200 p-4 dark:bg-slate-800">
      <div className="flex w-full justify-between">
        <p className="flex flex-col">
          <div className="flex items-center space-x-4">
            <RiCalendarCheckFill />
            <span className="font-light">01.02.23</span>
          </div>
          <div className="flex items-center space-x-4">
            <RiShoppingBagFill />
            <span className="font-light">{totalProducts} articles</span>
          </div>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-2xl font-medium">${totalPrice}</span>
          <RiArrowRightDoubleFill className="h-6 w-6 cursor-pointer fill-black dark:fill-slate-100" />
        </p>
      </div>
    </div>
  )
}

export { OrdersCard }
