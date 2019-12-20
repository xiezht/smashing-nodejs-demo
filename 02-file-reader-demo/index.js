var fs = require('fs')
var stdin = process.stdin
var stdout = process.stdout

fs.readdir(process.cwd(), (err, files) => {
  var stats = []
  function file(i) {
    var filename = files[i]
    fs.stat(process.cwd() + '/' + filename, (err, stat) => {
      if (err) return console.log(err.message)
      stats[i] = stat
      if (stat.isDirectory()) {
        console.log('    ' + i + ' \033[36m' + filename + '\033[39m')
      } else {
        console.log('    ' + i + ' \033[90m' + filename + '\033[39m')
      }
      i++;
      if (i == files.length) {
        read()
      } else {
        file(i)
      }
    })
  }
  function read() {
    // 空行
    console.log('');
    stdout.write('\033\31mEnter your choice: \033[39m')
    stdin.resume()
    stdin.setEncoding('utf-8')
    stdin.on('data', showFile)
  }
  function showFile(data) {
    // 选中目录不合法
    var filename = files[Number(data)]
    if (!filename) {
      stdout.write('\033\31mEnter your choice: \033[39m')
      read()
    } else {
      stdin.pause()
      if (stats[Number(data)].isDirectory()) {
        fs.readdir(process.cwd() + '/' + filename, (err, files) => {
          if (err) return console.log(err.message)
          console.log('')
          console.log('    (' + files.length + ' files)');
          files.forEach((file => {
            console.log('      -  ' + file)
          }))
          console.log('')
        })
      } else {
        fs.readFile(process.cwd() + '/' + filename, 'utf-8', (err, data) => {
          if (err) return console.log(err.message)
          console.log('')
          console.log('\033[90m' + data + '\033[39m')
          read()
        })
      }
    }
  }
  if (err) {
    console.log(err.message)
    return
  } else if (!files.length) {
    console.log('No files in current directory.')
    return
  } else {
    console.log('Select the file/directory.')
    file(0)
  }
})

