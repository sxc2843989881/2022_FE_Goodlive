import {INIT_CITY,CHANGE_CITY} from '../containts'

const defaultState = {
    cityName:'北京'
}

const city = (preState=defaultState,action ) => { 
    switch (action.type) {
        case INIT_CITY:
            return {
                cityName:action.cityName
            };
        case CHANGE_CITY:
            return {
                cityName:action.cityNameData
            };
        default:
            return preState;
    }
    
}

export default city