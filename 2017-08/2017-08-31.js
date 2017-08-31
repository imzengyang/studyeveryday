/**
 * 读取yaml 文件
 * 
 * https://www.npmjs.com/package/js-yaml
 */

const yaml = require('js-yaml')
const fs =require('fs')
const path = require('path')
let yamlpath = path.join(__dirname,'data.yaml')

let user = yaml.safeLoad(fs.readFileSync(yamlpath));

console.log(user)