
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {   useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => { 

    const [searchparams] = useSearchParams();

    // const params = useParams();

    const  dispatch = useDispatch()
    console.log(searchparams);

    useEffect(() => {
        dispatch(closeMenu())

    },[])

  return (
    <>
    <div className='flex-col w-full '>
    <div className='px-5 flex'>
      <div   >
      <iframe 
      width="1000"
      height="600" 
       
       src={"https://www.youtube.com/embed/" + searchparams.get("v") }
       title="YouTube video player"
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen>

         </iframe>
    </div>
    <LiveChat/>
    <div>

    </div>
    </div>
    <CommentContainer/>
    </div>
    </>
  )
}

export default WatchPage
