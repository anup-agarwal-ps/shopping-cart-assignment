import { lazy, ReactNode, useEffect, useState } from "react"
import { Banner, getBanners } from "../../apis/banner"

const LazyBannerImage = lazy(() => import("./banner-image"))

const Banners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([])
  const [current, setCurrent] = useState<number>(0)
  const [Component, setComponent] = useState<ReactNode | null>(null)

  useEffect(() => {
    getBanners()
      .then((banners) => setBanners(banners))
      .catch(console.log)
  }, [])

  const banner = banners && banners[current]

  useEffect(() => {
    if (banner) {
      setComponent(
        <LazyBannerImage
          bannerImageUrl={banner.bannerImageUrl}
          bannerImageAlt={banner.bannerImageAlt}
        />,
      )
    }
  }, [banner])

  return (
    <>
      {banner && (
        <div className="relative top-[40%] mt-5">
          {Component}
          <button
            className="absolute top-1/2 bg-[rgba(119,119,119,0.8)] p-[5px_12px] cursor-pointer border-transparent text-white text-[20px] rounded-full left-[30px]"
            onClick={(_) =>
              setCurrent((current) => banners.length - current - 1)
            }
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 bg-[rgba(119,119,119,0.8)] p-[5px_12px] cursor-pointer border-transparent text-white text-[20px] rounded-full right-[30px]"
            onClick={(_) =>
              setCurrent((current) => (current + 1) % banners.length)
            }
          >
            {">"}
          </button>
        </div>
      )}
    </>
  )
}

export default Banners
