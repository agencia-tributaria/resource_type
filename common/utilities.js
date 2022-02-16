const child = require('child_process')

module.exports = {
  exec: function(command) {
    child.exec(command, (error, stdout, stderr) => {
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
