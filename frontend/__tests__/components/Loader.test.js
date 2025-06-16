import { render, screen } from "../../test-utils/render-utils"
import { Loader } from "../../src/components/Loader"

it("should test that loader is visible on UI", () => {
  render(<Loader />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})
