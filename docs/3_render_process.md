## เริ่มต้นสร้าง view 

การทำงานของระบบนี้ เบื้องต้นคือลงเวลาโดยการ กรอกชื่อ หรืออาาจะมีหมายเหตุ (note)เพิ่มติมได้ โดยเวลาจะบันทึกให้ ณ เวลานั้น
เมื่อ กดลงเวลาแล้ว จะแสดงลิตส์ของทุกคนลงในตาราง

เราสามารถติดตั้ง 3d library ยอดนิยมต่าง ๆ ได้
โดยเราจะใช้คือ bootstrap กับ jquery และ moment

```bash
npm install bootstrap --save
npm install jquery --save
npm install moment --save
```

1) ให้ copy code จากไฟล์ [index.html](./../index.html) มาแทนที่ไฟล์ index.html ของเรา (ขอข้ามพวก css)

2) เมื่อ copy เสร็จ จะเห็นการเรียกใช้ css และ script ใน `<head>` 
```html
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">    
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
```
จะสามารถเรียกใช้ package ที่ติดตั้งไว้ได้ (nodejs จะรวม packages ใน node_modules)

