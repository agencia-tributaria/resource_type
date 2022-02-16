const child = require('child_process')
const fs = require('fs')

module.exports = {
  exec: function(command) {
    console.log(run)
    console.log(fs)
    child.exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
        } else if (stderr) {
            console.log(`stderr: ${stderr}`)
        } else {
            console.log(`stdout: ${stdout}`)
        }
    })
  },
  spawn: function(command, args) {
      return child.spawn(command, args)
  }
}
