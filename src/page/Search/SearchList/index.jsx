import React,{useState,useEffect} from "react";
import api from '../../../api'
import SearchListView from "../SearchListView";
import LoadMore from "../../../components/LoadMore";
import { useSelector } from "react-redux";
const SearchList = (props) => {

    const search = useSelector(state=>state.search.search)
    const [searchData,setSearchData]=useState([])
    const [hasMore,setHasMore] = useState(false)

    useEffect(()=>{
        http()
        return ()=>{
            setSearchData([])
        }
    },[props.search])

    function loadMoreHandle(){
        http()
    }
    function http(){
        api.search(
            {search:search}
        ).then(res => {
            console.log(res.data);
            if (res.data.status === 200) {
                setSearchData(searchData.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore)
            }
        }).catch(err => console.log(err))
    }

    return(
        <div>
            { 
                searchData.length >0?
                <SearchListView searchData={searchData} /> : <h3>等待数据加载</h3>
            }
            {
                hasMore?
                <LoadMore onLoadMore={loadMoreHandle}/> :
                <div>一滴都没有了...</div>
            }
            
        </div>
    )
}

export default SearchList