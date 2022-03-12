import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination'

import './index.less'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews); 
const Swiper = (props) => {
    
    const [index,setIndex] = useState(0)

    function handleChangeIndex(){
        if (index < props.Num) {
            setIndex(index+1);
        }else setIndex(0)
        
        
    }
    return(
        <div className='swiper'>
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            {
                props.banners.map(
                    (banner,index) => {
                        return(
                            <div key={index} className='swiper-view'>
                                <img src={banner} alt="" />
                            </div>
                        )
                    }
                )
            }
        </AutoPlaySwipeableViews>
        <Pagination currentIndex={ index } len={ props.banners.length } />
        </div>
    )
}

export default Swiper

