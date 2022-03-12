const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot')
const searchData = require('./data/searchData')
const datailsData = require('./data/details')
const url = require('url')
const { resolveNaptr } = require("dns");
const commentData = require("./data/comment")
const orderCommentData = require("./data/order")
const shopMsg = require('./data/shopMsg')

router.get('/home/hot1',(req,res)=>{
    const cityName = url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot1,
        cityName
    })
})
router.get('/home/hot2',(req,res)=>{
    const cityName = url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot2,
        cityName
    })
})
router.get('/search',(req,res)=>{
    const search = url.parse(req.url,true).query.search
    console.log(search);
    res.send({
        status:200,
        result:searchData,
        search
    })
})
router.get('/shop',(req,res)=>{
    const search = url.parse(req.url,true).query.search
    console.log(search);
    res.send({
        status:200,
        result:shopMsg,
        search
    })
})
router.get('/details',(req,res)=>{
    const id = url.parse(req.url,true).query.id
    res.send({
        status:200,
        result:datailsData,
        
    })
})
router.post("/login",(req,res) =>{
    const { username,password } = req.body;
    console.log(username);
    if(username && password){
        res.send({
            status:200,
            token:"enjy23rsdfe3fsveq.23r23sfdvfv.asdfqf4ag34ghdfjtkjhq",
            nick:username
        })
    }else{
        res.send({
            status:400,
            msg:'用户名密码错误'
        })
    }
})

router.get("/comment",(req,res) =>{
    const id = url.parse(req.url).query.id;
    console.log(id);
    res.send({
        status:200,
        result:commentData
    })
})

/**
 * lbs服务
 */
// 城市信息
router.get('/lbs/location', function (req, res, next) {
    let lat = req.query.latitude
    let lng = req.query.longitude
  
    request.get({
        uri: 'https://apis.map.qq.com/ws/geocoder/v1/',
        json: true,
        qs: {
            location: `${lat},${lng}`,
            key: '24EBZ-QOT3V-RN3P2-ULHSA-D6KIH-FEFB4'
        }
    }, (err, response, data) => {
        if (response.statusCode === 200) {
            res.send(data)
        } else {
            res.send({
                msg:"获取失败"
            })
        }
    })
})


/**
 * 订单评价
 */
router.get("/order/comment",(req,res) =>{
    const username = url.parse(req.url,true).query.username;
    console.log(username);
    res.send({
        status:200,
        result:orderCommentData
    })
})


/**
 * 评价
 */
router.post("/order/submit/comment",(req,res) =>{
    const { username,id,content } = req.body;
    console.log(username,id,content);
    res.send({
        msg:"评价成功",
        status:200
    })
})
module.exports = router;