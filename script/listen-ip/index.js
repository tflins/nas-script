const fs = require('fs')
const schedule = require('node-schedule')
const { resolve, join } = require('path')
const { getIpv4Ip } = require('../../utils/ip')
const { sendEmail } = require('../../utils/email')

const __path = resolve(join(__dirname, `./old-ip`))


function start() {
  fs.writeFileSync(__path, getIpv4Ip())

  // 每分钟的第 10 秒 检测一次
  schedule.scheduleJob('10 * * * * *', () => {
    const cur = getIpv4Ip()
    const old = fs.readFileSync(__path, 'utf8')

    if (cur !== old) {
      const message = {
        title: 'NAS 通知: 公网 IP 已发生变化',
        content: `老 IP : ${old} -> 新 IP :${cur}`
      }
      sendEmail(message)
      fs.writeFileSync(__path, cur)
    }
  })
}

start()
