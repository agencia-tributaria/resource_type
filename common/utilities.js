const { run } = require("child_process")
const fs = require('fs')

module.exports = {
  exec: function(command) {
    console.log(fs)
    console.log(run)
    run("ls -la", (error, stdout, stderr) => {
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
      return run(command, args)
  }
}
