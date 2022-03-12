import React from "react";
import '../../../components/Carousel'
import Swiper from "../../../components/Carousel";
import HeaderNav from "../../../components/HeaderNav";
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner3.png'
import HomeHotList from "./HomeHotList";
import{useSelector} from 'react-redux';



const Home = () => {
    const city=useSelector(state=>state.city)
    return(
        <div className="bottomColor">
            <HeaderNav crrcity={city.cityName} />
            <Swiper banners={[banner1,banner2,banner3]} Num={ 2 } />
            <HomeHotList crrcity={city.cityName}/>
        </div> 
    ) 
}

export default Home