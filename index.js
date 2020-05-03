const { app, BrowserWindow } = require('electron')

app.whenReady().then(function() {
    w = new BrowserWindow({backgroundColor: '#bf34c2'})
    console.log('sealant: keepontop')
})
