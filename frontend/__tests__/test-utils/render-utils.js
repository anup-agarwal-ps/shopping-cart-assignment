import { MemoryRouter } from "react-router"

import { render } from "@testing-library/react"

export const customRender = (node, options) => {
  render(<MemoryRouter>{node}</MemoryRouter>, options)
}

export * from "@testing-library/react"

export { customRender as render }
