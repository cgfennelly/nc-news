import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { postCommentArticle } from "../api";
import { UserContext } from "../context/User"

const PostComment = ({ article_id }) => {
    const { user } = useContext(UserContext);
    const [input, setInput] = useState('')
    const [postedComment, setPostedComment] = useState({});
    const userToAdd = user.username

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                    type="text"
                ></input>


                <button
                    onClick={() => {
                        postCommentArticle(article_id, userToAdd, input)
                            .then((res) => {
                                setPostedComment(res)
                            })
                            .catch((err) => {
                                console.log("there is an error")
                            });
                    }}>
                    Post comment
                </button>
            </form>
            <div className='comment-card'>
                <p className='comment-body'>{postedComment.body}</p>
                <div className='comment-meta'>
                    <p>{postedComment.votes}</p>
                    <p>{postedComment.author}</p>
                </div>
            </div>
        </div>
    )
}

export default PostComment;