import React,{useState} from 'react'
import './index.less'
import defaultPng from '../../../../assets/images/default.png'
import loadImageAsync from '../../../../utils/loadImage'
import { Link } from 'react-router-dom'

export default function Item(props) {
    const data = props.data
    const [currentUrl,setCurrentUrl] = useState(defaultPng)
    loadImageAsync(data.img).then(res=>{
        setCurrentUrl(res)
    })
return (
    <div className='list-item'>
        
        <Link to={`/details/${data.id}`}>
        <img src={currentUrl} alt="" />
        <div className='mask'>
            <div className='left'>
                <p>{data.title}</p>
                <p>{data.houseType}</p>
            </div>
            <div className='right'>
                <div className='btn'>
                    {data.rentType}
                </div>
                <p dangerouslySetInnerHTML={{__html:data.price +"元/月"}} ></p>
            </div>
        </div>
        </Link>
    </div>
  )
}
