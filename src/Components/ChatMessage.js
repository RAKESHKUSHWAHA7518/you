import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex item-center shadow-sm p-2'>
      <img className='rounded-full size-10' alt= "user" src="https://lh3.googleusercontent.com/a/ACg8ocLS1nIiYYb24HLixaabyFl82IUlvCh_byKMRrQAWG--=s96-c"/>
      <span className='font-bold  px-2'>{name} </span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
