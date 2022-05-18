const redis = require("../redis");

const initialize = async () => {
  const count = await redis.getAsync("added_todos");
  if (!count) {
    await redis.setAsync("added_todos", 0);
  }
};

module.exports = { initialize };
