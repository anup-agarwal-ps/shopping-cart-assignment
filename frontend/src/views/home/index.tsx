import { lazy, ReactNode, useContext, useEffect, useState } from "react"
import { Category as ICategory, getCategories } from "../../apis/category"
import { CartContext } from "../../context/cart"
import { Category } from "./category"

const LazyBanners = lazy(() => import("../../layout/banner"))

type Props = {}

const Products: React.FC<Props> = () => {
  const { setLoading } = useContext(CartContext)
  const [categories, setCategories] = useState<ICategory[]>([])
  const [BannerComponent, setBannerComponent] = useState<ReactNode | null>(null)

  useEffect(() => {
    setBannerComponent(<LazyBanners />)
  }, [])

  useEffect(() => {
    const callAPI = async () => {
      try {
        setLoading(true)
        const data = await getCategories()
        setCategories(
          data.sort(
            (category1, category2) => category1.order - category2.order,
          ),
        )
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    callAPI()
  }, [setLoading])

  useEffect(() => {
    import("../products")
      .then((_) => console.log("products module prefetched"))
      .catch((_) => console.log("failed to prefetch products page"))
  }, [])

  return (
    <>
      {BannerComponent}
      <ul className="w-full flex flex-col items-center justify-between pl-7">
        {categories
          .filter(({ enabled }) => enabled)
          .map((category, index) => {
            return (
              <Category category={category} key={category.id} index={index} />
            )
          })}
      </ul>
    </>
  )
}

export default Products
