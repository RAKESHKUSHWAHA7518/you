import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../utils/contants';
import VideoCard ,{AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [video,setVideo] = useState([])

    useEffect(()=>{
   getVideos();
    },[]);

    const getVideos = async() =>{

        const data = await fetch(Youtube_API)

        const json = await data.json();
        //  console.log(json.items)
        setVideo(json.items);

    }
  return (
    <div className='flex flex-wrap'>
   { video[0] && <AdVideoCard info={video[0]}/>}
        {video.map((video) => ( <Link  key= {video.id} to= {"/watch?v=" + video.id}><VideoCard  info ={video}/> </Link>))}
     
    </div>
  )
}



export default VideoContainer
