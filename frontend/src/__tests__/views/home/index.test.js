import { rest } from "msw"
import { getServer } from "../../../test-utils/setup-server"
import Products from "../../../views/home"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"

jest.mock("../../../layout/banner/index.tsx")

describe("Test categories", () => {
  const server = getServer([
    rest.get("/categories", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            description: "string",
            enabled: true,
            id: 1,
            imageUrl: "string",
            key: "string",
            name: "string",
            order: 1,
          },
          {
            description: "string",
            enabled: true,
            id: 2,
            imageUrl: "string",
            key: "string",
            name: "string",
            order: 2,
          },
          {
            description: "string",
            enabled: true,
            id: 3,
            imageUrl: "string",
            key: "string",
            name: "string",
            order: 3,
          },
        ]),
      )
    }),
  ])
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  it("should test categories", async () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>,
    )
    expect(await screen.findAllByRole("listitem")).toHaveLength(3)
  })
})
