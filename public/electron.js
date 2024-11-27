// public/electron.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Log important paths to help debug
  console.log('Application directory:', app.getAppPath());
  console.log('Current directory:', __dirname);

  if (isDev) {
    console.log('Running in development mode');
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    console.log('Running in production mode');
    const indexPath = path.join(app.getAppPath(), './build/index.html');
    console.log('Attempting to load:', indexPath);
    
    // Check if file exists
    const fs = require('fs');
    if (fs.existsSync(indexPath)) {
      console.log('index.html file exists at path');
    } else {
      console.log('index.html file NOT found at path');
      // Log the contents of the directory
      console.log('Contents of app directory:', fs.readdirSync(app.getAppPath()));
      if (fs.existsSync(path.join(app.getAppPath(), 'build'))) {
        console.log('Contents of build directory:', 
          fs.readdirSync(path.join(app.getAppPath(), 'build')));
      }
    }

    win.loadFile(indexPath)
      .then(() => {
        console.log('Successfully loaded index.html');
      })
      .catch((error) => {
        console.error('Error loading index.html:', error);
      });
  }

  // Open DevTools in production for debugging
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});