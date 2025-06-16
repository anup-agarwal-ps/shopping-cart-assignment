import { render, screen } from "@testing-library/react";
import ProductDetailImage from "../../src/components/product-detail-image";

it('should test productDetailImage component', async () => {
  render(<ProductDetailImage imageURL="image url" />)
  expect(screen.getByRole("img")).toHaveAttribute("src", "image url")
})
