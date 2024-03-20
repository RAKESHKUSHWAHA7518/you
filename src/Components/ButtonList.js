import React from 'react'
import Button from './Button'

// const list = ["All","Game","Tech","Songs","Cricket","Movies","News","Comedy"]


const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      <Button name="All"/>
      <Button name= "Game"/>
      <Button name="Tech"/>
      <Button name ="Songs"/>
      <Button name ="Cricket"/>
      <Button name ="Movies"/>
      <Button name ="News"/>
      <Button name ="Comedy"/>
    </div>
  )
}

export default ButtonList
