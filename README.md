# easy-file-server

一个简单好用的文件服务。提供本地静态资源服务的功能，将来可能提供剪切板等便于局域网内调试的功能。

## TODO List

### 基础能力
- [x] 支持本地文件服务
- [x] 支持设置文件目录
- [x] 支持停止服务
- [x] 提示服务启动状态
- [x] 服务启动状态下不可点击启动服务
- [x] 服务停止状态下不可点击停止服务
- [x] 显示当前选中的目录
- [ ] 支持设置服务端口
- [ ] 面板支持显示目录树
- [ ] 面板显示日志信息
- [ ] 支持扫码在手机端打开，然后显示目录下的文件
- [ ] 支持扫码打开单个文件
- [ ] 支持同步剪切板（待细化形态）

### 项目能力
- [x] 支持单测
- [ ] 支持 ESlint

### 体验优化
- [ ] 支持监听服务的状态（服务是否运行中，可能涉及心跳检测）
