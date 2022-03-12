import React ,{useState}from "react";
import CityHeader from '../../components/CityHeader'
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import CityLists from "./CityLists";
import{useSelector,useDispatch } from 'react-redux'
import {INITCITY,CHANGECITY} from '../../redux/actions/city'
import cityData from "../../data/citys";
const City = () => {
    const dispatch =useDispatch();
    // const [city,setCity] = useState('选择一个城市')
    const city = useSelector(state=>state.city)

    function currentCity(crrCity){
        dispatch(CHANGECITY(
            crrCity
        ))
    
    }
    
    return(
        <div>
        <CityHeader title={'城市列表'}/>
        <CurrentCity city={city.cityName} />
        <CityList crrCity={currentCity} />
        <CityLists cityData={cityData.indexCitys}/>
        </div>
        
        )
}
export default City

  