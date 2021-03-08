const dotEnv = require("dotenv")

const { runLogin } = require("./selenium")

dotEnv.config()

const username = process.env.LOGIN_USERNAME || ""
const password = process.env.LOGIN_PASSWORD || ""
const url = process.env.LOGIN_URL || ""

console.log(`RUN at ${new Date()}`)
runLogin(url, username, password)
