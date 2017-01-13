const {shell} = require('electron')
const webview = document.getElementById('chat')
const logger = require('electron-logger');

webview.addEventListener('dom-ready', (e) => {
    logger.info(e)
})

webview.addEventListener('new-window', (e) => {
    const protocol = require('url').parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
    shell.openExternal(e.url)
}
})