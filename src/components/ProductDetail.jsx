import react from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useShoppi } from '../hooks/useShoppi'

function ProductDetail() {
  const { detailProduct, productToShow, toggleDetailProduct } = useShoppi()

  return (
    <>
      {detailProduct && (
        <aside className=" fixed right-0 top-0 z-10 md:w-1/4 h-screen w-screen dark:text-slate-100 dark:bg-slate-700 bg-slate-100 ">
          <section className="relative top-8 lg:top-16 px-3">
            <section className="flex items-center justify-between py-2">
              <h2 className="text-xl font-medium">Detail</h2>
              <RiCloseFill
                className="h-6 w-6 cursor-pointer"
                onClick={() => toggleDetailProduct()}
              />
            </section>

            <figure>
              <img
                className="h-full w-full rounded-lg"
                src={productToShow.images}
                alt={productToShow.title}
              />
            </figure>
            <article className="pt-2">
              <h1 className="mb-1 text-2xl font-medium">
                {productToShow.price}
              </h1>
              <h2 className="text-md font-medium">{productToShow.title}</h2>
              <p className="text-sm font-light">{productToShow.description}</p>
            </article>
          </section>
        </aside>
      )}
    </>
  )
}

export { ProductDetail }
