# Teamwork chat - Linux version

This is a minimal app based on Electron, which uses a webview to show a web version of Teamwork Chat.

Application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `browser.html` - A web page to render. This is the app's **renderer process**.
- `browser.js` - Browser specific functions.


## How to run app


```bash
# Clone repo and enter dir
# Install dependencies
npm install
# Run the app
npm start
```

Electron [documentation](http://electron.atom.io/docs/).

## PACKAGING

App use a [electron-builder](https://www.npmjs.com/package/electron-builder) for building and packaging Electron app.

For building a linux version, specify build options in package.json : 
```json
"build": {
    "appId": "sk.creanet.teamworkchat",
    "linux": {
      "target": "deb"
    }
  },
 ```
and run :
```bash
npm run dist
```


