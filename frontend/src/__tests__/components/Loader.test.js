import { render, screen } from "../../test-utils/render-utils"
import { Loader } from "../../components/Loader"

it("should first", () => {
  render(<Loader />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})
