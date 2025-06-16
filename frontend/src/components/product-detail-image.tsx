const ProductDetailImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <img
      src={imageURL}
      alt=""
      role="img"
      style={{
        marginRight: "40px",
        border: "1px solid #ccc",
      }}
    />
  )
}

export default ProductDetailImage
