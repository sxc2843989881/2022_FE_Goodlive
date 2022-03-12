import React from "react";
import './index.less'
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

const HeaderNav = (props) => {
    return(
        <div id="home-header" className="clear-fix">
            <div className="home-header-left float-left">
                <Link to='/city' >
                    <div className="span">
                        <span >
                            {props.crrcity}
                            <i className="icon-angle-down"></i>
                        </span>
                    </div>
                    
                    
                </Link>
                
            </div>
            <div className="home-header-right float-right">
                <Link to='/order' ><i className="iconfont icon-electro"></i></Link>
            </div>
            <div className="home-header-middle">
                <div className="search-container">
                <i className="icon-search"></i>
                <SearchInput/>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderNav