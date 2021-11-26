const nodemailer = require('nodemailer')

let transporter = null

/**
 * 创建 Transport
 * @param {*} options 
 * @returns 
 */
function createTransport(options) {
  const defaultOptions = {
    service: '163', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
    port: 25, // SMTP 端口
    secureConnection: false, // SSL安全链接
    auth: {   //发送者的账户密码
      user: 'xxxx@163.com', //账户
      pass: 'xxxxxxx', //smtp授权码，到邮箱设置下获取
    }
  }
  transporter = nodemailer.createTransport(Object.assign({}, defaultOptions, options))
  return transporter
}

/**
 * 发送邮件
 * @param {*} message 
 * @param {*} options 
 */
async function sendEmail({ title, content }, options) {
  const defaultOptions = {
    from: '"xxxx-name" <xxxx@163.com>', // 发送者昵称和地址
    to: 'xxxxxx@qq.com', // 接收者的邮箱地址
    subject: title, // 邮件主题
    text: content,  //邮件的text
    // html: html  //也可以用html发送  
  }

  const mailOptions = Object.assign({}, defaultOptions, options)

  const transporter = createTransport()

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      }
      resolve('邮件发送成功 ID：', info.messageId)
    })
  })
}

module.exports = {
  createTransport,
  sendEmail
}