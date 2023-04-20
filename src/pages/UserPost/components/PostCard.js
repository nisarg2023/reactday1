import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const PostCard = ({ post }) => {



    const [currentComment, setCurrentComment] = useState([])
    const [showcomment, setShowcomment] = useState(false)

    const handelviewcomment = (id) => {
        
        if(showcomment)
        {
            setCurrentComment([]);
            setShowcomment(false)
        }
        else{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then(data => {

                setShowcomment(true)
                setCurrentComment(data);
            })
        }

    }



    return (<>
        <div className="col_3">
            <div className="post_card">
                <div>
                    <h3>{post.id}</h3>
                </div>
                <div>
                    <label>{post.title}</label>
                </div>

                <div>
                    <p>{post.body}</p>
                </div>

                <div>
                    <button onClick={() => handelviewcomment(post.id)} > view comment </button>

                    {

                        currentComment.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <hr />
                                    <div>
                                        <h5>{comment.id}</h5>

                                    </div>
                                    <div>
                                        <label>Name : {comment.name}</label>
                                    </div>
                                    <div>
                                        <p>comment: {comment.body}</p>
                                    </div>
                                </div>
                            )
                        })}

                </div>

            </div>
        </div>

    </>)
}


