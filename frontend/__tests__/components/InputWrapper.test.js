import { render, screen } from "@testing-library/react"
import InputWrapper from "../../src/components/InputWrapper"

it('should test inputwrapper component', () => {
  render(<InputWrapper type="text" />)
  expect(screen.getByRole("textbox")).toBeInTheDocument()
})
