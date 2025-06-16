import { setupServer } from "msw/node"

export const setMSWServer = (handlers) => {
  const server = setupServer(...handlers)
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  return server
}
