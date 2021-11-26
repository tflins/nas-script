const os = require('os')

/**
 * 获取 ipv4 的地址
 */
function getIpv4Ip() {
  const interfaces = os.networkInterfaces()
  let address = null

  Object.keys(interfaces).forEach(key => {
    const iface = interfaces[key]
    for (let i = 0, len = iface.length; i < len; i++) {
      const cur = iface[i]
      if (cur.address !== '127.0.0.1' && !cur.internal && cur.family === 'IPv4') {
        address = cur.address
      }
    }
  })

  return address;
}

module.exports = {
  getIpv4Ip
}