import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { PostCard } from "./components/PostCard";




export const UserPost=()=>{
    
    
    const [allPost ,setAllPost]=useState([]);
    const [totalPages,setTotalPages]= useState(0);
    const [currentPost,setcurrentPost]= useState([]);
    const [pageNumber,setPageNumber]= useState(1);



    const postPerPage = 3;

    const {state} = useLocation()
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        .then((data)=>{
                
            let post = data.filter((post)=>{return post.userId==state})
            setAllPost(post)
            setTotalPages(post.length/postPerPage)
            setcurrentPost(post.slice(0,postPerPage))
            
            
        
        })
    },[]);

    useEffect(()=>{}
    
    ,[])


    const handelLoadeMore =()=>{
        const temp = pageNumber+1
        setPageNumber(pageNumber+1);
     
        if(temp >totalPages)
        {
            alert("theare no more data available");
        }
        else{
            setcurrentPost(allPost.slice(0,postPerPage*temp))
        }
        
    }

    return(
        <>
            <div className="row">
            
            {currentPost.map((post)=>
                <PostCard key={post.id} 
                post={post} 
                
                />
            )}

            </div>

            <button onClick={handelLoadeMore}>
                loade more
            </button>
        </>
    )
}


