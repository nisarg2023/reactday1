import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { PostCard } from "./components/PostCard";




export const UserPost=()=>{
    
    
    const [allPost ,setAllPost]=useState([]);
    const [totalPages,setTotalPages]= useState(0);
    const [currentPost,setcurrentPost]= useState([]);
    const [pageNumber,setPageNumber]= useState(1);

    const [currentComment, setCurrentComment] = useState([])
    const [showcomment, setShowcomment] = useState(null)

    const postPerPage = 2;

    const {state} = useLocation()
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        .then((data)=>{
                
            let post = data.filter((post)=>{return post.userId==state})
            setAllPost(post)
            setTotalPages(5)
            setcurrentPost(post.slice(0,postPerPage))
            
            
        
        })
    },[]);


    
    
   
   

    const handelviewcomment = (id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res=>res.json())
        .then(data=>{
         
            setShowcomment(id)
            setCurrentComment(data);
        })
       
    }

    return(
        <>
            <div className="row">
            
            {currentPost.map((post)=>
                <PostCard key={post.id} 
                post={post} 
                currentComment={currentComment} 
                handelviewcomment={handelviewcomment}
                showcomment={showcomment}
                />
            )}

            </div>

            <button onClick={()=>handelLoadeMore(pageNumber,setPageNumber,currentPost,setcurrentPost,postPerPage,allPost,totalPages)}>
                loade more
            </button>
        </>
    )
}


const handelLoadeMore =(pageNumber,setPageNumber,currentPost,setcurrentPost,postPerPage,allPost,totalPages)=>{
    setPageNumber(++pageNumber);
    if(pageNumber >totalPages)
    {
        alert("theare no more data available");
    }
    else{
        setcurrentPost(allPost.slice(0,postPerPage*pageNumber))
    }
    
}