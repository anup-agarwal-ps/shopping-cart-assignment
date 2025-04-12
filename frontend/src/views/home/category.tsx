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
      <CategoryImage imageUrl={category.imageUrl} id={category.id} />,
    )
  }, [category])

  return (
    <>
      {index > 0 ? (
        <hr className="mt-2.5 w-[80%] mx-auto border border-gray-300 scale-90 shadow-[0_4px_8px_2px] shadow-gray-300" />
      ) : null}
      <li
        key={category.id}
        className={`flex justify-between items-center h-[400px] w-[80%] mx-auto ${
          index % 2 ? "flex-row-reverse" : "flex-row"
        } max-[1180px]:w-full max-[800px]:w-full`}
      >
        {Component}
        <div className="flex-[0_0_50%] text-center">
          <h2
            className="mb-5 max-[1500px]:text-[30px] max-[800px]:text-[20px]"
            id={category.id}
          >
            {category.name}
          </h2>
          <p className="mb-5 max-[1500px]:text-[30px] max-[800px]:text-[20px]">
            {category.description}
          </p>
          <button
            className="cursor-pointer text-white p-5 border-transparent rounded max-[1500px]:p-1.5 max-[1500px]:text-[10px] max-[800px]:p-1.5 max-[800px]:text-[10px]"
            style={{ backgroundColor: THEME_COLOR }}
            onClick={() => {
              navigate(PRODUCTS_PAGE)
            }}
          >
            Explore {category.key}
          </button>
        </div>
      </li>
    </>
  )
}
