const { createClient } = require("redis")
const { REDIS_URL } = require("../config/credentials")

let client = createClient({
  url: REDIS_URL,
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect()

const getRedisClient = () => {
  return client
}

// use client.flushAll() to clear redis data

module.exports = { getRedisClient }
