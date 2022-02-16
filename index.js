const core = require('@actions/core');
const github = require('@actions/github');
const wadl = require('./wadl/utilities.js')
const system = require('./common/utilities.js')
                     
try {
  let added = core.getInput('added')
  if (added) {
    console.log("added: " + added) 
  } else {
    console.log("nothing added") 
  }
  let modified = core.getInput('modified')
  if (modified) {
    console.log("modified: " + modified) 
  } else {
    console.log("nothing modified") 
  }
  system.exec(`java -version`)
  system.exec(`mvn -v`)
  //const path = core.getInput('path');
  //const time = (new Date()).toTimeString();
  //core.setOutput("time", time);
  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  //wadl.pushed(path, github.context.payload.head_commit.message.startsWith("Update"))
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
