const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

let serverProcess;

function startServer() {
  if (serverProcess) {
    serverProcess.kill();
  }
  serverProcess = spawn('node', ['./bin/server.js'], { stdio: 'inherit' });
}

function watchFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Failed to list contents of directory: ${err}`);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (error, stats) => {
        if (error) {
          console.error(`Failed to stat file: ${error}`);
          return;
        }
        if (stats.isDirectory()) {
          watchFiles(filePath);
        } else if (stats.isFile()) {
          fs.watch(filePath, (eventType, filename) => {
            if (filename) {
              console.log(`File changed: ${filename}`);
              startServer();
            }
          });
        }
      });
    });
  });
}

startServer();
watchFiles('src');
