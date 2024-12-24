import { useEffect, useState } from "react"
import { Category, getCategories } from "../../apis/category"
import { GREY_COLOR } from "../../constants/colors"

interface Props {
  selectCategoryHandler: (categoryId: string | null) => void
  selectedCategory: string | null
}

export const Sidebar: React.FC<Props> = ({
  selectCategoryHandler,
  selectedCategory,
}) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
      .then((_) => {
        setCategories(
          _.sort((category1, category2) => category1.order - category2.order),
        )
      })
      .catch(console.log)
  }, [])

  return (
    <aside
      className={`flex-[0_0_18%] border border-gray-300 p-0 pb-5 bg-[${GREY_COLOR}] min-h-[${window.innerHeight}px] 
        max-[1180px]:flex-[0_0_30%] max-[800px]:hidden`}
    >
      <ul>
        {categories
          .filter((category) => category.enabled === true)
          .map((category) => (
            <li
              className={`list-none border-b border-gray-300 cursor-pointer ${
                category.id === selectedCategory ? "bg-white" : "bg-transparent"
              }`}
              onClick={(e) => e.stopPropagation()}
              key={category.id}
            >
              <button
                tabIndex={0}
                className="w-full h-full p-[10px_0_10px_10px] text-left border-none cursor-pointer bg-transparent"
                onClick={() =>
                  selectCategoryHandler(
                    category.id === selectedCategory ? null : category.id,
                  )
                }
              >
                {category.name}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  )
}
