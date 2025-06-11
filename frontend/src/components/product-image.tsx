const ProductImage = ({
  description,
  imageURL,
  alt,
}: {
  imageURL: string
  description: string
  alt: string
}) => {
  return (
    <img
      alt={alt}
      title={description}
      height="200px"
      width="150px"
      src={imageURL}
      className="product-image"
    />
  )
}

export default ProductImage
