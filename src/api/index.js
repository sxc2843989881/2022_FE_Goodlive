import axios from "../utils/request";

/* 路径地址 */
const base = {
    baseUrl:"http://localhost:5500",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    search:"/api/search",
    details:"/api/details",
    login:"/api/login",
    comment:"/api/comment",
    comentOrder:"/api/order/comment",
    submitComment:"/api/order/submit/comment",
    shopMsg:"/api/shop"
}
/* 请求方法 */
const api = {
    getHomeHot1(params){
        console.log(params);
        return axios.get(base.baseUrl+base.homehot1,{
            params
        })
    },
    getHomeHot2(params){
        return axios.get(base.baseUrl+base.homehot2,{
            params
        })
    },
    search(params){
        return axios.get(base.baseUrl+base.search,{
            params
        })
    },
    details(params){
        return axios.get(base.baseUrl+base.details,{
            params
        })
    },
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    /**
     * 商品评价
     */
    comment(params){
        return axios.get(base.baseUrl + base.comment,{
            params
        })
    },
    /**
     * 评价
     */
    comentOrder(params){
        return axios.get(base.baseUrl + base.comentOrder,{
            params
        })
    },
    /**
     * 提交评价
     */
    submitComment(params){
        return axios.post(base.baseUrl + base.submitComment,params)
    },
    shopMsg(params){
        return axios.get(base.baseUrl + base.shopMsg,params)
    }
}

export default api;