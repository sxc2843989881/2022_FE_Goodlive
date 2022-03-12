import {INIT_CITY,CHANGE_CITY} from '../containts'

export function INITCITY(cityName){
    return {
        type:INIT_CITY,
        cityName
    }
}
export function CHANGECITY(cityNameData){
    return {
        type:CHANGE_CITY,
        cityNameData
    }
}