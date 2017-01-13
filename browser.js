const {shell} = require('electron')
const webview = document.getElementById('chat')
const logger = require('electron-logger');

webview.addEventListener('dom-ready', (e) => {
    logger.info(e)
})