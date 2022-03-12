import React from "react";
import CitySelect from 'react-city-select'
import{useSelector,useDispatch } from 'react-redux'
import {INITCITY,CHANGECITY} from '../../../redux/actions/city'
import './index.less'
const CityLists = (props) => {
    const dispatch = useDispatch()

    function handleSelectCity(cityData){
        dispatch(CHANGECITY(cityData.name))
        //console.log(cityData);
        window.history.back()
    }
    return(
        <div className="citylists">
            <CitySelect
        // 传入数据
        data={props.cityData}
        // 传入配置
        // 传入回调
        onSelectItem={handleSelectCity}>
            </CitySelect>
        </div>
    )
}
export default CityLists