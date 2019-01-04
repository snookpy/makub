## เพิ่มการทำงานให้ระบบสามารถลงเวลาได้

1) ในไฟล์ index.html ก่อน tag ปิด `</body>` จะเห็น script
```html
<script src="./scripts/main-script.js"></script>
```
ไว้สำหรับจัดการ หน้า index.html ด้วย javascript 
สร้าง folder ชื่อ scripts และสร้างไฟล์ชื่อ main-script.js 

2) ในไฟล์ main-script.js เพิ่ม code
```javascript
const $ = require('jquery')
const moment = require('moment')
const fs = require('fs')
const filename = 'database'
```
$ คือเรียกใช้ jquery ที่เราติดตั้งไปก่อนหน้านี้
moment ไว้สำหรับจัดการ format เวลา

3) เริ่มจากอ่านไฟล์ ในเบื้องต้นเราจะทำการเซฟข้อมูลเขียนลงในไฟล์(ซึ่งสามารถประยุกต์เป็นเก็บใน database ได้) ด้วย function readFileAndShowTable()

```javascript
function readFileAndShowTable() {
    $('#time-table tbody').empty()
    //Check if file exists
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n')

        data.forEach((eachRow, index) => {
            let [name, time, note] = eachRow.split(',')
            appendTable(index + 1, name, time, note)
        })

    } else {
        console.log("File Doesn\'t Exist. Creating new file.")
        fs.writeFile(filename, '', (err) => {
            if (err)
                console.log(err)
        })
    }
}
```
ทำ tbody element ของ table id = time-table ให้ว่างจากนั้น เช็คว่าไฟล์ มีอยู่หรือไม่ ถ้าไม่มีให้สร้างขึ้นมา
เมื่ออ่านไฟล์เก็บไว้ใน data แล้ว ส่งต่อให้ function appendTable ในการสร้าง element dom ของตารางขึ้นมา
```javascript
function appendTable(index, name, time, note) {
    if (name)
        $('#time-table tbody').append(`<tr> 
        <td> ${index} </td>    
        <td> ${name} </td>
        <td> ${moment(parseInt(time)).format('HH:mm')} </td>
        <td> ${note == "" ? '-': note} </td>
        </tr>`)
}
```

4) add เวลาด้วย
```javascript
$('#addtime-form').submit(function (e) {
    e.preventDefault()
    addTime($('#nameInput').val(), Date.now(), $('#noteInput').val())
    $('#addtime-form')[0].reset()
})

function addTime(name, time, note) {
    console.log(name, time, note)
    fs.appendFileSync(filename, `${name},${time},${note}\n`)
    readFileAndShowTable()
}
```
อธิบายได้ว่า เมื่อฟอร์มที่มี id = addtime-form ถูก submit มาจะ break การทำงานของฟอร์มด้วย e.preventDefault()
จากนั้น ดึงvalue name ด้วย $('#nameInput').val() ใช้เวลา ณ ปัจจุบัน ด้วย Date.now() และ value note ด้วย $('#noteInput').val()
ส่งเข้าไปใน function addTime()
addTime() จะทำการเขียนไฟล์ต่อจากเดิม ถ้าไม่มีก็จะสร้างไฟล์ใหม่แล้วเขียนลงไปในรูปแบบ

    name, time, note \n

เมื่อลงเวลาสำเร็จ ก็จะสร้างตารางแสดงเวลาใหม่ด้วย readFileAndShowTable()

5) เมื่อเริ่มระบบ หรือ เริ่ม appขึ้นมาควรเรียกตารางมาแสดงผลเลย จึงเพิ่ม code 
```javascript
readFileAndShowTable()
```
ไว้บนไฟล์