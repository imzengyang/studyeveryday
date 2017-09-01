/**
 * 处理excel 文件
 * 
 */

const xlsx = require('xlsx');
const path = require('path')

let excelfile = path.join(__dirname,'..','files','users.xlsx')
// console.log(excelfile)

let filedata =  xlsx.readFile(excelfile)
// console.log("sheetname",filedata.SheetNames);
// console.log("sheets",filedata.Sheets)
// console.log("workbook",filedata.Workbook)


for(let sheetName of filedata.SheetNames){
    if(sheetName == "userinfo"){
        let userinfo = filedata.Sheets[sheetName]
        console.log(userinfo.A1.v)
    }
}