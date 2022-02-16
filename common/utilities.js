const { run } = require("child_process");

module.exports = {
  exec: function(command) {
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
