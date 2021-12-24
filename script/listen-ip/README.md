# 监控公网 IP ，当公网 IP 变化时，发生邮件通知

对于有公网 ip 的朋友，想远程回家，一般都会使用 ddns 。但是最近部分地区运营商在严打这方面，使用 ddns 会被运营商警告「向外提供 web 服务」，进而停封宽带。家用的公网 ip 大部分是动态的，写了个脚本监听公网 ip 的变化，ip 发生改变时，通过邮件通知。

## 如何使用

首先你在你的 NAS 上需要安装 node，具体安装方法可根据自己的 NAS 型号自行搜索。

下载脚本

```bash
git clone https://github.com/tflins/nas-script
```

或者通过其他方式下载。

安装 `pm2`

首先确保你已经安装了 node，否则将无法使用 npm 安装 pm2

```bash
npm i pm2 -g
```

修改邮箱配置

使用 pm2 守护进程

```bash
 pm2 start script/listen-ip
```
