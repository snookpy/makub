# Welcome to Makub 
### This toturial created for learn basic Electron, Makub is time attend system

## เริ่มต้น

ติดตั้ง lectron package
Install electron package
```cmd
npm install electron --save-dev
```

เพิ่ม scripts สำหรับใช้คำสั่ง start app
```json
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

สร้างไฟล์ใหม่ ชื่อ index.js และเพิ่ม code ข้างล่างลงไป
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

จากนั้นสร้าง ไฟล์ 
```html

```

Let's start!
```

npm run start
```
