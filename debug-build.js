import { exec } from "child_process";

console.log("Starting build process...");

const buildProcess = exec("npm run build", { timeout: 30000 }); // 30 second timeout

buildProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

buildProcess.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

buildProcess.on("close", (code) => {
  console.log(`Build process exited with code ${code}`);
});

buildProcess.on("error", (error) => {
  console.log(`Build process error: ${error}`);
});

setTimeout(() => {
  console.log("Build process timeout reached");
  buildProcess.kill();
}, 30000);
