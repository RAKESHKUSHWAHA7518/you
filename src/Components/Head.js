import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Search_API } from '../utils/contants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {

  const dispatch = useDispatch()

  const [searchQuery,setSearchQuery]= useState("")

   const [suggestions,setSuggestions] = useState([])

   const [showSuggestions,setShowSuggestions] = useState(false)

   const searchCaches = useSelector((store)=>store.search)



   useEffect(() => {

   const timer= setTimeout(()=>{
     if(searchCaches[searchQuery]) {
      setSuggestions(searchCaches[searchQuery])

    } else{
      getSearchSuggestions()

    }
    },200)

   return ()=>{
    clearTimeout(timer)

   };
   



   },[searchQuery]);

   const   getSearchSuggestions= async() =>{
    console.log(searchQuery);
    const data= await fetch(Search_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])

    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
    // console.log(json[1]);


   }
    

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
        <div  className='flex col-span-1'>
      <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg'/>
      <a href='/'>
      <img className='h-8 mx-2' alt='youtube' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
      </a>
        </div>
        <div className='col-span-10 px-10'>
          <div>
           <input className='px-5  w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'
           
           value= {searchQuery}
           onChange={(e)=> setSearchQuery(e.target.value)}
           onFocus={()=> setShowSuggestions(true)}
           onBlur={()=> setShowSuggestions(false)}

           />
           <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
      { showSuggestions &&(<div className='fixed bg-white py-2 px-2 sm:w-[17rem] md:w-[37rem] shadow-lg rounded-lg border-gray-100'>
          <ul>
            {suggestions.map((s)=> (
              <li key={s} className=' py-2 px-3 shadow-sm hover:bg-gray-200'>🔍{s}</li>
            ))}
            
             
          </ul>

        </div>
        )}
            
            
        </div>
        <div className='col-span-1'>
            <img  className ='h-8'alt='user' src='https://cdn-icons-png.freepik.com/256/64/64572.png' />
        </div>
        </div>
  )
}

export default Head
