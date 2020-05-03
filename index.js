const { app, BrowserWindow } = require('electron')

app.whenReady().then(function() {

    w = new BrowserWindow({backgroundColor: '#bf34c2'})

    const [,, ... args] = process.argv
    console.log(args)
    if (args[0]) {
        console.log('opening '+args[0])
        w.loadURL(args[0])
    }
    if (args[1] == '--top') {
        console.log('attempting to keep window on top')
        console.log('sealant: keepontop')
    }
})
