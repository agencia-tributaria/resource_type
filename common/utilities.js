const exec = require("child_process");

module.exports = {
  exec: function (command) {
    exec("ls -la", (error, stdout, stderr) => {
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
      return spawn(command, args)
  }
}
