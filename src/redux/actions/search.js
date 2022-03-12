import { UPDATA_SEARCH } from "../containts";

export function updataSearch(search){
    return {
        type:UPDATA_SEARCH,
        search
    }
}