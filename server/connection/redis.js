const { createClient } = require("redis")

const getRedisClient = () => {
  let client
  if (!client)
    client = createClient({
      url: process.env.REDIS_URL,
    })
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect()
  return client
}

module.exports = { getRedisClient }
