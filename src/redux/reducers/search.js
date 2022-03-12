import { UPDATA_SEARCH } from "../containts";
const defaultState = {
    search:''
}

export default function search(pre = defaultState,action){
    switch(action.type){
        case UPDATA_SEARCH:
            return{
                search:action.search
            }
        default:
            return pre
    }
    
}