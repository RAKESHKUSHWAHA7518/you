
import React from 'react'

const VideoCard = ({info}) => {

    // const rr =info.snippet;
     console.log(info);

    //   console.log(info.snippet)
 
       const {snippet ,statistics} = info;
       const {channelTitle,title,thumbnails} = snippet;

  return (
     <div className='p-2 m-2 w-72 shadow-lg'>

<img className='rounded-lg' alt='rr' src={thumbnails.medium.url}/>
<ul>
       <li className='font-bold py-2'>{title}</li>
       <li>{channelTitle}</li>
       <li>{statistics.viewCount}</li> 
       </ul>
        {/*
     
        
         
         
         */}
       
    </div>
  )
};

export const AdVideoCard = ({info})=>{
     return <div className='p-1 m-2 border border-red-900'> <VideoCard info= {info}/></div>
    }
    


export default VideoCard
