### ติดตั้ง lectron package

เริ่มจาก สร้าง nodejs project ด้วย

```bash
    npm init
```

เมื่อตั้งค่า project init เสร็จแล้ว ให้ติดตั้ง electron package

```cmd
npm install electron --save-dev
```
save เป็น dev เพราะเราใช้แค่ตอน development เท่านั้น ตอน build เป็น production จะไม่ใช้ทำให้มีขนาดไฟล์เล็กลง

เพิ่ม scripts สำหรับใช้คำสั่ง start app
```json
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```