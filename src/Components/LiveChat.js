import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'



const LiveChat = () => {

    const  [LiveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch()
    const chatMessage = useSelector((store) => store.chat.message);
    



    useEffect(()=>{
     const i=   setInterval(()=>{


        // API data

        // console.log("API data");
        dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(15)
        }))

        },2000);

        return ()=> clearInterval(i);
    },[])

  return (
    < >
    <div className=''>
    <div className='ml-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse '>
    
    <div>{ chatMessage.map((c,i)=>(
      <ChatMessage key={i} name={c.name} message={c.message}/>
     )) 
    
     }
     </div>
     
     
    </div>

    <form className='w-full p-2 ml-2 border border-black flex  '
     onSubmit={(e)=>{
        e.preventDefault()
        console.log("Submit",LiveMessage);
        dispatch(addMessage({
            name:'Rakesh',
            message:LiveMessage,
        }))

        setLiveMessage("");
    }}>
  <input className='w-96 ' type='text' placeholder='Live Chat' value = {LiveMessage} onChange={(e)=>{
    setLiveMessage(e.target.value);
  }}/>
  <button className='px-2 mx-2 bg-green-100'>Send</button>
   
   </form>

    
 </div>
   </>
    
  )
}

export default LiveChat
