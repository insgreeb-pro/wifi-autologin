const dotEnv = require("dotenv")
const schedule = require("node-schedule")

const { runLogin } = require("./selenium")

dotEnv.config()

const username = process.env.LOGIN_USERNAME || ""
const password = process.env.LOGIN_PASSWORD || ""
const url = process.env.LOGIN_URL || ""
const cron = process.env.CRON_JOB || "10 0 * * *"

schedule.scheduleJob(cron, () => {
  console.log(`RUN at ${new Date()}`)
  runLogin(url, username, password)
})
