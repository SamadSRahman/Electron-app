import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // if (import.meta.env.VITE_NODE_ENV === 'development') {
  //   win.loadURL('http://localhost:3000');
  // } else {
  //   win.loadFile(path.join(__dirname, 'dist/index.html'));
  // }
  win.loadURL('http://localhost:5173')
  win.webContents.openDevTools();
}


app.whenReady().then(createWindow);

// app.on('window-all-closed', () => {
//   if (import.meta.env.VITE_PLATFORM !== 'darwin') {
//     app.quit();
//   }
// });

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
