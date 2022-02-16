const core = require('@actions/core');
const github = require('@actions/github');
const java = require('./java/generate.js')
const wadl = require('./wadl/utilities.js')
                     
try {
  // `who-to-greet` input defined in action metadata file
  const path = core.getInput('path');
  console.log(`Procesando el archivo fuente WADL de la ruta ${path}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  wadl.log()
  java.log()
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
