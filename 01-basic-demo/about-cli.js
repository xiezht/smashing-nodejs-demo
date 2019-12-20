/**
 * 命令行相关API
 */

// 获取命令行参数
console.log(process.argv)
console.log(process.argv.slice(2))

// 获取程序工作目录
console.log(__dirname)
console.log(process.cwd())


// 环境变量
console.log(process.env.NODE_ENV)
console.log(process.env.SHELL)

// 退出程序
// process.exit(1)

// 进程信号
process.on('SIGKILL', function () {
  console.log('recieve sig kill')
})
process.stdin.resume()

// ASCII转义码
// "\033[90m"

// Stream流
//  大文件chunk发送
//  使用WriteStream，减少查找、打开文件的次数

// 监视
fs.watchFile(file, function cb() {
  // dosomething()
})
fs.watch(dir, function cb() {
  // dosomething()
})
