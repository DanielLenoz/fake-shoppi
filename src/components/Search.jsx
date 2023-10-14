import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function Search({ searchValue, setSearchValue }) {
  return (
    <>
      <label className="label mx-auto my-6 flex h-12 w-80 cursor-pointer items-center overflow-hidden rounded-full border-2 border-gray-950 pl-4 pr-2 focus-within:border-green-500 dark:border-neutral-600 dark:focus-within:border-green-600 lg:h-14 lg:w-[684px]">
        <input
          className="input rounded-ful font-roboto h-12 w-80 rounded-full bg-slate-100 text-base font-normal focus-visible:border-none focus-visible:outline-none dark:bg-slate-900 dark:text-slate-100 lg:h-14 lg:w-[684px] lg:text-lg"
          type="text"
          value={searchValue}
          placeholder="Que producto buscas"
          onChange={(event) =>
            setSearchValue(event.target.value.toLocaleLowerCase())
          }
        />
        <BiSearchAlt className=" h-7 w-7 dark:fill-slate-100" />
      </label>
    </>
  )
}

export { Search }
