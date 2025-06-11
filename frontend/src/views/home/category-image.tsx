import React from "react"

type Props = {
  imageUrl: string
  id: string
  name: string
}

const CategoryImage = ({ imageUrl, id, name }: Props) => {
  return <img src={imageUrl} alt={name} aria-labelledby={id} />
}

export default CategoryImage
