const { app, BrowserWindow } = require('electron')

app.whenReady().then(function() {
    new BrowserWindow({backgroundColor: '#bf34c2'})
})
