import { COLLECT,UNCOLLECT } from "../containts"

export function setCollect(collect){
    return{
        type:COLLECT,
        collect
    }
}

export function removeCollect(id){
    return{
        type:UNCOLLECT,
        id
    }
}