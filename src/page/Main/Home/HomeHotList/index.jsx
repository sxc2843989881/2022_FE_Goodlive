import React,{useState,useEffect} from "react";
import api from "../../../../api";
import HomeHotView from "../HomeHotView";
import './index.less'
const HomeHotList =(props) => {

    const [hot1List,setHot1List]=useState([])
    const [hot2List,setHot2List]=useState([])
    const [cityName,setCityName]=useState()

    useEffect(
        () => {
            api.getHomeHot1({
                cityName:props.crrcity
            }).then(res => {
                console.log(res);
                if(res.data.status===200){
                    setHot1List(res.data.result)
                    setCityName(res.data.cityName)
                }
            })
        }
    ,[])

    useEffect(
        () => {
            api.getHomeHot2({cityName:props.crrcity}).then(res => {
                if(res.data.status===200){
                    setHot2List(res.data.result)
                }
            })
        }
    ,[])

    return(
        <div className="colorChange">
            {
                hot1List.length >0?
                <HomeHotView  data={ hot1List} city={cityName} title={'热门商品'} />:
                <div>等待数据加载</div>
            }
            {
                hot2List.length>0?
                <HomeHotView  data={ hot2List }city={cityName} title={'新品推荐'}/>:
                <div>等待数据加载</div>
            }
        </div>
    )
}

export default HomeHotList