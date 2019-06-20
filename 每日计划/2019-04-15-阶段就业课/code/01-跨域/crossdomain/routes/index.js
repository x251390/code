var express = require('express');
var router = express.Router();
const http = require('http');

/* 接收请求 */ 
router.get('/test01', (req, res) => {
  // 设置响应头解决跨域
  // res.header('Access-Control-Allow-Origin', '*')
  // let { callback } = req.query // getData 支持jsonp的服务器需要接收函数名

  let data = {
    msg: '测试数据'
  }

  // 支持jsonp的服务器需要把数据传入函数中 返回
  // res.send(callback + '(' + JSON.stringify(data) + ')') // getData( 后台数据 )


  res.send(data) // getData( 后台数据 )
})


/* 自己的后端 */ 
// router.get('/self', (req, res) =>{
//   // 自己的后端去请求别人的服务器数据
//   http.get('http://localhost:3000/test01', (response) => {
//     // 准备变量 保存数据
//     let rst = '';
//     response.on('data', (readData) => {
//       rst += readData
//     })
//     response.on('end', (readData) => {
//       res.send(rst) // 把结果发给自己的前端
//     })
//   })
// })

module.exports = router;
