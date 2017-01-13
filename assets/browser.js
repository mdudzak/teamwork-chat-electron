const {shell} = require('electron')
const webview = document.getElementById('chat')

let logger;
var debug = false;

if (debug) {
    logger = require('electron-logger');
}

webview.addEventListener('dom-ready', (e) => {
    if (logger != null) logger.info(e)
})

webview.addEventListener('new-window', (e) => {
    const protocol = require('url').parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(e.url)
    }
})