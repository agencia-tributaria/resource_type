const core = require('@actions/core');
const github = require('@actions/github');
const wadl = require('./wadl/utilities.js')
const system = require('./common/utilities.js')
                     
try {
  console.log("input: " + core.getInput('changes'))
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
