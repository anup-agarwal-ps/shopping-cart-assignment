import { useEffect, useState } from "react"
import { Category, getCategories } from "../../apis/category"
import { GREY_COLOR, THEME_COLOR } from "../../constants/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

interface Props {
  selectCategoryHandler: (categoryId: string | null) => void
  selectedCategory: string | null
}

export const Sidebar: React.FC<Props> = ({
  selectCategoryHandler,
  selectedCategory,
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [open, setOpen] = useState<boolean>(selectedCategory ? true : false)

  useEffect(() => {
    getCategories()
      .then((_) => {
        setCategories(
          _.sort((category1, category2) => category1.order - category2.order),
        )
      })
      .catch(console.log)
  }, [])

  const category = categories.find((category) => {
    if (category.id === selectedCategory) {
      console.log(category)
    }
    return category.enabled === true && category.id === selectedCategory
  })

  // console.log({ category })

  return (
    <>
      {/* Desktop Nav */}
      <aside
        className={`border border-gray-300 p-0 pb-5 bg-[#ddd] min-h-[95vh] hidden sm:block`}
      >
        <ul>
          {categories
            .filter((category) => category.enabled === true)
            .map((category) => (
              <li
                className={`list-none border-b-2 border-white cursor-pointer ${
                  category.id === selectedCategory
                    ? "bg-white"
                    : "bg-transparent"
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

      {/* Mobile nav */}
      <aside className={`bg-[#D10356] sm:hidden mb-2 mt-4`}>
        <ul>
          {!open && category ? (
            <li
              className="border-b-2 border-white mb-0"
              onClick={(_) => setOpen(true)}
            >
              <button className="w-full flex justify-between items-center pr-4 list-none h-full p-[10px_0_10px_10px] text-left border-none cursor-pointer bg-transparent border-white border-b-2">
                {category?.name}
                <FontAwesomeIcon icon={faCaretDown} size="2xl" />
              </button>
            </li>
          ) : null}

          {!category || open
            ? categories
                .filter((category) => category.enabled === true)
                .map((category) => (
                  <li
                    className={`list-none border-b-2 border-white cursor-pointer`}
                    onClick={(e) => e.stopPropagation()}
                    key={category.id}
                  >
                    <button
                      tabIndex={0}
                      className="w-full h-full p-[10px_0_10px_10px] text-left border-none cursor-pointer bg-transparent"
                      onClick={() => {
                        selectCategoryHandler(category.id)
                        setOpen(false)
                      }}
                    >
                      {category.name}
                    </button>
                  </li>
                ))
            : null}
        </ul>
      </aside>
    </>
  )
}
