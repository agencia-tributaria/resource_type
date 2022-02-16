module.exports = {
  log: function () {
    const fs = require('fs')
    const content = 'Hello, World!'
    fs.writeFile('hello-world.txt', content, err => {
      if (err) {
        console.error(err)
      } else {
        console.log('file written successfully')
      }
    })
    console.log(process.cwd())
  }
};
