## Build code เป็น windows app

1) มีหลาย package ที่ช่วย build electron app แต่ขอหยิบตัวนี้ [electron-packager](https://github.com/electron-userland/electron-packager)

2) ติดตั้ง electron-packager 
```bash
    npm install electron-packager --save-dev
```
3) เพิ่ม script build ในไฟล์ package.json    
    
```javascript
    "scripts": {
        "dev": "electron .",
        "build": "electron-packager .",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
```
4) build app ด้วย 
```cmd
npm run build
```