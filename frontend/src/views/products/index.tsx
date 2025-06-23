import { useContext, useEffect, useState } from "react"
import { getProducts, Product } from "../../apis/product"
import { ProductCard } from "../../components/product-card"
import { CartContext } from "../../context/cart"
import { Sidebar } from "../../layout/sidebar"

type Props = {}

const Products: React.FC<Props> = () => {
  const { setLoading } = useContext(CartContext)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const callAPI = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    callAPI()
  }, [setLoading])

  useEffect(() => {
    if (selectedCategory !== null) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory),
      )
    } else {
      setFilteredProducts(products)
    }
  }, [selectedCategory, products])

  return (
    <div
      className={`w-full pb-4 bg-white flex sm:flex-row items-start flex-col pt-1 sm:pt-6`}
    >
      <div className={`w-full sm:flex-[1_1_50%] md:flex-[1_1_25%]`}>
        <Sidebar
          selectCategoryHandler={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <ul className="w-full sm:flex sm:flex-wrap">
        {filteredProducts.map((product, index) => {
          return <ProductCard product={product} key={product.id} />
        })}
      </ul>
    </div>
  )
}

export default Products
