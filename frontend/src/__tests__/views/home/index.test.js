import { rest } from "msw";
import { getServer } from "../../../test-utils/setup-server";
import Products from "../../../views/home";
import { render, screen } from "../../../test-utils/render-utils";

jest.mock("../../../layout/banner/index.tsx");

const categoriesResponse = [
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
];

const server = getServer([
  rest.get("/categories", (req, res, ctx) => {
    return res(ctx.json(categoriesResponse));
  }),
]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Test categories", () => {
  it("should test categories", async () => {
    console.log("TEST ENVIRONMENT:", typeof window !== "undefined" ? "jsdom" : "node");
    render(<Products />);
    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
  });
});