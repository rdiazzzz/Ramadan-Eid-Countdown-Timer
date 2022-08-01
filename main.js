const { app, BrowserWindow } = require("electron");
// const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    // icon: 'assets/icon.ico',
    width: 960,
    height: 540,
    minHeight: 480,
    minWidth: 480,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#00FFFFFF",
    },
  });

  win.loadFile("src/index.html");
  // win.loadURL('https://zenkaa7.github.io/Ramadan-Countdown-Timer/')
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
