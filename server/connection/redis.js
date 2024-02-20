const { createClient } = require("redis")

let client = createClient({
  url: process.env.REDIS_URL,
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect()

const getRedisClient = () => {
  return client
}

// use client.flushAll() to clear redis data

module.exports = { getRedisClient }
