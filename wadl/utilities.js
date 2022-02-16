module.exports = {
  pushed: function (path, existing) {
    if (existing) {
      updated(path)
    } else {
      created(path)
    }
  }
}
function updated(path) {
  console.log("updated: " + path)
}
function created(path) {
  console.log("created: " + path)
}
