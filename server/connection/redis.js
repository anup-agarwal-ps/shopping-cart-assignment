const { createClient } = require("redis")

const getRedisClient = () => {
  let client
  if (!client)
    client = createClient({
      url: "rediss://red-cn76nfmn7f5s73da6fu0:Kt0Bs2zawOrdmfQxGUidrg5ClvJrt3gS@oregon-redis.render.com:6379",
    })
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect()
  return client
}

module.exports = { getRedisClient }
