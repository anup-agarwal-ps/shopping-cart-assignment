type Props = {
  bannerImageUrl: string
  bannerImageAlt: string
}

const BannerImage = ({ bannerImageAlt, bannerImageUrl }: Props) => {
  return (
    <img
      src={bannerImageUrl}
      alt={bannerImageAlt}
      className="w-full m-auto lg:w-8/12"
    />
  )
}

export default BannerImage
