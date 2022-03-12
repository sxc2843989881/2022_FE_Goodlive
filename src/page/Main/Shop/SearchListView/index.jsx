import React from "react";
import Item from "./Item";
import './index.less'
import totop from '../../../../assets/images/totop.png'
const SearchListView = (props) => {
    
    function backTop(e){
        window.scrollTo(0,0);
    }

    return(
        <div>
            {
                props.searchData.map((ele,index) => {  
                    return <Item key={index} data={ ele } />
                })
            }
            <img src={totop} className='totop' onClick={backTop}  alt='' ></img>
        </div>
    )
}

export default SearchListView