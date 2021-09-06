// require dotenv
require("dotenv").config();
console.log(process.env.APPLICATION_ID, process.env.SECRET);

module.exports = {
  APPLICATION_ID: process.env.APPLICATION_ID,
  SECRET: process.env.SECRET,
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000",
};
