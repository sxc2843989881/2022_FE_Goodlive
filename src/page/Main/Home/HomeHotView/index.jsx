import React from "react";
import './index.less'

const HomeHotView = (props) => {
    return(
        
        <div className="hotproduct">
            <h3>{props.title}</h3>
            <div className="hot-container">
                <ul className="clear-fix">
                    {
                        props.data.map((ele,index) => {
                            return(
                                <li key={index} >
                                    <a href={ele.link}>
                                        <img src={ele.img} alt="" />
                                        <span>{props.city}{ele.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default HomeHotView