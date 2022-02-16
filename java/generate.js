module.exports = {
  log: function () {
    const fs = require('fs')
    const content = 'Some content!'
    fs.writeFile('/Users/joe/test.txt', content, err => {
      if (err) {
        console.error(err)
      } else {
        console.log('file written successfully')
      }
    })
    console.log(process.cwd())
  }
};
