import React, { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Category as ICategory } from "../../apis/category"
import { THEME_COLOR } from "../../constants/colors"
import { PRODUCTS_PAGE } from "../../constants/routes"
import CategoryImage from "./category-image"

interface Props {
  category: ICategory
  index: number
}

export const Category: React.FC<Props> = ({ category, index }) => {
  const [Component, setComponent] = useState<ReactNode | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    setComponent(
      <CategoryImage
        imageUrl={category.imageUrl}
        name={category.name}
        id={category.id}
      />,
    )
  }, [category])

  return (
    <>
      {index > 0 ? (
        <hr className="mt-2.5 w-[90%] mx-auto border border-gray-300 scale-90 shadow-[0_4px_8px_2px] shadow-gray-300" />
      ) : null}
      <li
        key={category.id}
        className={`flex justify-between items-center h-[400px] w-[80%] mx-auto ${
          index % 2 ? "flex-row-reverse" : "flex-row"
        } max-[1180px]:w-full max-[800px]:w-full`}
      >
        <div className="w-6/12 flex justify-center">
          <div className="w-12/12 md:w-7/12">{Component}</div>
        </div>
        <div className="w-6/12 flex justify-center">
          <div className="text-center">
            <h2 className="mb-5 text-2xl" id={category.id}>
              {category.name}
            </h2>
            <p className="mb-5 text-lg">{category.description}</p>
            <button
              className="cursor-pointer text-white border-transparent rounded h-10 px-2"
              style={{ backgroundColor: THEME_COLOR }}
              onClick={() => {
                navigate(PRODUCTS_PAGE)
              }}
            >
              Explore {category.name}
            </button>
          </div>
        </div>
      </li>
    </>
  )
}
