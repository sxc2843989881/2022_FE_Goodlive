import React from "react";
import './index.less'

import { NavLink } from "react-router-dom";

const BottomNav = () => {
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink activeClassName="anemo" exact to='/'>
                    <i className="iconfont icon-anemo" ></i>
                    首页
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink activeClassName="hydro" exact to='/life'>
                    <i className="iconfont icon-hydro" ></i>
                    生活服务
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink activeClassName="pyro" exact to='/shop'>
                    <i className="iconfont icon-pyro" ></i>
                    商城
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink activeClassName="geo" exact to='/user'>
                    <i className="iconfont icon-geo" ></i>
                    {/* <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-geo1"></use></svg> */}
                    我的
                    </NavLink>
                    
                </li>
            </ul>
        </div>
    )
}
export default BottomNav