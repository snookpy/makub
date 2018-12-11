const $ = require('jquery')
const moment = require('moment')
const fs = require('fs')
const filename = 'repositories/database'
readFileAndShowTable()

$('#addtime-form').submit(function (e) {
    e.preventDefault()
    addTime($('#nameInput').val(), Date.now(), $('#noteInput').val())
    $('#addtime-form').reset()
})

function addTime(name, time, note) {
    console.log(name, time, note)
    fs.appendFileSync(filename, `${name},${time},${note}\n`)
    readFileAndShowTable()
}

function appendTable(index, name, time, note) {
    if (name)
        $('#time-table tbody').append(`<tr> 
        <td> ${index} </td>    
        <td> ${name} </td>
        <td> ${moment(parseInt(time)).format('HH:mm')} </td>
        <td> ${note == "" ? '-': note} </td>
        </tr>`)
}

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