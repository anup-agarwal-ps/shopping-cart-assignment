import { render, screen } from "@testing-library/react";
import ProductImage from "../../src/components/product-image";

it('should test productImage component', () => {
  render(<ProductImage description="I am description" alt="alt text" />)
  expect(screen.getByRole("img")).toHaveAttribute("alt", "alt text")
})
