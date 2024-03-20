import React from 'react'

const commentData= [
    {
        name: 'Rakesh Kushwaha',
        text: 'vfn8f bfnufhgfefui vb hbfr',
        eeplies: [
            {
                name: 'Rakesh Kushwaha',
                text: 'vfn8f bfnufhgfefui vb hbfr',
                eeplies: [
                    {
                        name: 'Rakesh Kushwaha',
                        text: 'vfn8f bfnufhgfefui vb hbfr',
                        eeplies: [
                            {
                                name: 'Rakesh Kushwaha',
                                text: 'vfn8f bfnufhgfefui vb hbfr',
                                eeplies: [
                                    {
                                        name: 'Rakesh Kushwaha',
                                        text: 'vfn8f bfnufhgfefui vb hbfr',
                                        eeplies: [
                                            {
                                                name: 'Rakesh Kushwaha',
                                                text: 'vfn8f bfnufhgfefui vb hbfr',
                                                eeplies: [ 
                                                    {
                                                        name: 'Rakesh Kushwaha',
                                                        text: 'vfn8f bfnufhgfefui vb hbfr',
                                                        eeplies: [
                                                
                                                        ]
                                                    },
                                        
                                                ]
                                            },
                                
                                        ]
                                    },
                        
                                ]
                            },
                
                        ]
                    },
        
                ]
            },

        ]
    },
    {
        name: 'Rakesh Kushwaha',
        text: 'vfn8f bfnufhgfefui vb hbfr',
        eeplies: [

        ]
    },
    {
        name: 'Rakesh Kushwaha',
        text: 'vfn8f bfnufhgfefui vb hbfr',
        eeplies: [

        ]
    },
    {
        name: 'Rakesh Kushwaha',
        text: 'vfn8f bfnufhgfefui vb hbfr',
        eeplies: [

        ]
    },
]

 const Comment = ({data})=>{
    const {name,text,replies} = data;
     return  <div className='flex shadow-sm bg-gray-100 '>

       <img className='rounded-full size-10' alt= "user" src="https://lh3.googleusercontent.com/a/ACg8ocLS1nIiYYb24HLixaabyFl82IUlvCh_byKMRrQAWG--=s96-c"/>
       <div className='px-3'>
       <p className='font-bold'> {name}</p>
       <p  className=''>{text}</p>
       </div>

        
        </div>
 }

 const CommentList = ({comments}) =>{
   return  comments.map((comment,index)=>(
    <div key={index}>
        <Comment data= {comment}/>
        <div className='pl-5 border border-l-black ml-5'>
        <CommentList  comments ={comment.eeplies} />
        </div>
        </div>
   ));

     
};


const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comment</h1>
      {/* <Comment data={commentData[0]}/> */}
      <CommentList comments= {commentData}/>

    </div>
  )
}

export default CommentContainer
