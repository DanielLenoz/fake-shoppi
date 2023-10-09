import react from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useShoppi } from '../hooks/useShoppi'

function ProductDetail() {
  const { detailProduct, productToShow, toggleDetailProduct } = useShoppi()

  console.log(productToShow)
  return (
    <>
      {detailProduct && (
        <aside className=" fixed right-0 top-0 z-10 h-screen w-screen bg-slate-100 ">
          <section className="relative top-8 px-3">
            <section className="flex items-center justify-between">
              <h2>Detail</h2>
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
            <article>
              <h1 className="mb-2 text-2xl font-medium">
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
