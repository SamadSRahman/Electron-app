const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

//   win.loadURL('http://localhost:3000')
win.loadFile(path.join(__dirname, 'build', 'index.html')).catch((error) => {
  console.error("Error loading index.html:", error);
});
}

app.whenReady().then(createWindow)