import { useContext } from "react";
import { useState } from "react";
import { postCommentArticle, deleteComment } from "../api";
import { UserContext } from "../context/User"

const PostComment = ({ article_id }) => {
    const { user } = useContext(UserContext);
    const [input, setInput] = useState('')
    const [postedComment, setPostedComment] = useState({});
    const [err, setErr] = useState(null);
    const userToAdd = user.username

    if (Object.keys(postedComment).length > 0) {
        return (
            <div >
                <form className="post-comment"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                    <input className="post-comment-field"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        type="text"
                    ></input>
    
    
                    <button className="post-comment-button"
                        onClick={() => {
                            setErr(null);
                            postCommentArticle(article_id, userToAdd, input)
                                .then((res) => {
                                    setPostedComment(res)
                                })
                                .catch((err) => {
                                    if (err.response.status === 400) {
                                        setErr("Please add a comment to submit.");
                                    } else {
                                        setErr("Something went wrong!");
                                    }
                                });
                            setInput('');
                        }}>
                        Post comment
                    </button>
                </form>
                <p>{err}</p>
                <div className='comment-card'>
                    <p className='comment-body'>{postedComment.body}</p>
                    <div className='comment-meta'>
                        <p>{postedComment.votes}</p>
                        <div className='comment-meta-user'>
                            <button className='comment-meta-delete' onClick={() => {
                                deleteComment(postedComment.comment_id)
                            }}>Delete</button>
                            <p>{postedComment.author}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div >
                <form className="post-comment"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                    <input className="post-comment-field"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        type="text"
                    ></input>
    
    
                    <button className="post-comment-button"
                        onClick={() => {
                            setErr(null);
                            postCommentArticle(article_id, userToAdd, input)
                                .then((res) => {
                                    setPostedComment(res)
                                })
                                .catch((err) => {
                                    if (err.response.status === 400) {
                                        setErr("Please add a comment to submit.");
                                    } else {
                                        setErr("Something went wrong!");
                                    }
                                });
                            setInput('');
                        }}>
                        Post comment
                    </button>
                </form>
            </div>
        )
    }

   
}

export default PostComment;