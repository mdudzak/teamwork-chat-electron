const {app, BrowserWindow} = require('electron');

let mainWindow;
var debug = true;

app.on('window-all-closed', function() {
    app.quit();
});


app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1024, height: 768, title: "Teamwork CHAT" });
    mainWindow.loadURL('file://' + __dirname + '/browser.html');

    if (debug) {
        mainWindow.openDevTools();
    }
});