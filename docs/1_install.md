### ติดตั้ง lectron package

1) สร้าง nodejs project ด้วย

```bash
    npm init
```
ทำการตั้งค่าพื้นฐานได้ตามสะดวก

2) ติดดตั้ง electron package

```cmd
npm install electron --save-dev
```
save เป็น dev เพราะเราใช้แค่ตอน development เท่านั้น ตอน build เป็น production จะไม่ใช้ทำให้มีขนาดไฟล์เล็กลง

3) เพิ่ม scripts ใน package.json สำหรับใช้คำสั่ง start app
```json
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```