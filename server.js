const dotEnv = require("dotenv")
const express = require("express")
const port = process.env.PORT || 4000

dotEnv.config()

const { runLogin } = require("./selenium")

const username = process.env.LOGIN_USERNAME || ""
const password = process.env.LOGIN_PASSWORD || ""
const url = process.env.LOGIN_URL || ""

const app = express()

app.get("*", async (_, res) => {
  try {
    await runLogin(url, username, password)
    return res.json({
      success: true,
      msg: "Login Success!",
    })
  } catch {
    return res.status(500).json({
      success: false,
      msg: "Login Error",
    })
  }
})

app.listen(port, () => {
  console.log(`> Server running at http://localhost:${port}`)
})
