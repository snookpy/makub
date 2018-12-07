# Welcome to Makub 
### This toturial created for learn basic Electron, Makub is time attend system

## Start

Install electron package
```cmd
npm install electron --save-dev
```

Add scripts section in package.json with
```json
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Create file "index.js" for main process then, replace the code:
```js
const {
    app,
    BrowserWindow
} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open chrome dev tool
    win.webContents.openDevTools();
}

app.on('ready', createWindow)
```

Then, create file "index.html" for render view with code: 
```html

```

Let's start!
```

npm run start
```
