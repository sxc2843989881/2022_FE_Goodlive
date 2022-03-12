import React ,{useEffect,useRef,useState} from 'react'

export default function LoadMore(props) {
    const more = useRef()
    const [loadTop,setLoadTop] = useState(10000)
    useEffect(() => {
        //获取视口高度
        let windowHeight = document.documentElement.clientHeight
        let timer = null
        function loadMore(){
            if(more.current){
                setLoadTop(more.current.getBoundingClientRect().top)
                //console.log(more.current.getBoundingClientRect().top);
                if(timer){
                    clearTimeout(timer)
                }else{
                    timer = setTimeout(() => {
                        if ( windowHeight > loadTop ) {
                            props.onLoadMore()
                        }
                    }, 300);
                }
        }}
        window.addEventListener("scroll",loadMore)
        return () =>{
            // window.removeEventListener("scroll",loadMore)
            // clearTimeout(timer)
            }
    },[loadTop])
    //console.log(loadTop);
    return (
        <div ref={ more } > LoadMore...</div>
    )
    }
