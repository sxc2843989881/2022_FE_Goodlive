import React,{useEffect,useState,useRef} from "react";
import './index.less'
import { withRouter,useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updataSearch } from "../../redux/actions/search";

const SearchInput = (props) => {
    
    const params = useParams();
    const reduxSearch = useSelector(state=>state.search.search)
    const [searchKeywords,setSearchKeywords] = useState(params.keywords)
    const dispatch = useDispatch()
    function keyUpHandle(e){
        // console.log(e);
        
        if(searchKeywords.length){
        if (e.keyCode === 13){
            props.history.push('/search/'+searchKeywords)
            dispatch(updataSearch( searchKeywords ))
            }
        }
    }

    function changeHandle(e){
        setSearchKeywords(e.target.value)
    }
    
    useEffect(()=>{
        if(params.keywords){
            dispatch(updataSearch(params.keywords))
        }else{
            dispatch(updataSearch(''))
        }
        setSearchKeywords(reduxSearch);
    },[params.keywords,reduxSearch])

    return(
        <input 
        className="search-input" 
        type="text"
        value={searchKeywords || ''}
        onKeyUp={ keyUpHandle }
        onChange={ changeHandle }
        />
    )
}

export default withRouter( SearchInput )