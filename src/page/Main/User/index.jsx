import React from "react";
import { withRouter } from "react-router-dom";
import { Image, Space } from 'antd-mobile'
import sun from '../../../assets/images/default.png'
import './index.css'

import UserList from "./UserList";
const User = (props) => {

    function toLogin(){
        props.history.push('/login')
    }
    return(
        <div className="div0" >
        <Space wrap >
            <Image
            src={sun}
            width={96}
            height={96}
            fit='cover'
            style={{ borderRadius: 64 }}
            onClick={toLogin}
            className="img1"/>
        </Space>
            <UserList toLogin={toLogin}/>
            
        </div>
    ) 
}

export default withRouter(User)