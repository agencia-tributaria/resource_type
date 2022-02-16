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
  let url = "https://github-registry-files.githubusercontent.com/459265356/067a0300-8f5e-11ec-924f-94a48d355b5c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220216T182906Z&X-Amz-Expires=300&X-Amz-Signature=3045bc0442446a97ad14597b2604724415a52c60d0e997fb0ca66e7957b73a60&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=459265356&response-content-disposition=filename%3Dresource_type-1.0-20220216.182410-1.jar&response-content-type=application%2Foctet-stream"
  system.exec(`curl ${url} -o resource_type.jar`)
  system.exec(`java -jar resource_type.jar`)
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
