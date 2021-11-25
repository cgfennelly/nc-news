import { useState } from "react/cjs/react.development";
import { addVoteArticle } from "../api";

const ArticleVote = ({ article_id, votes }) => {
    const [voteModifier, setVoteModifier] = useState(0);

    return (
        <div className='article-vote'>
            <p>{votes + voteModifier}</p>
            <button 
            onClick={() => { 
                addVoteArticle(article_id)
                .catch((err) => {
                    console.log("there is an error")
                });
                setVoteModifier((voteModifier) => {
                    return voteModifier + 1;
                })
                }}>Like!</button>
        </div>
    )
}

export default ArticleVote;