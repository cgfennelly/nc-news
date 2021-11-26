import { useState } from "react/cjs/react.development";
import { addVoteArticle } from "../api";

const ArticleVote = ({ article_id, votes }) => {
    const [voteModifier, setVoteModifier] = useState(0);
    const [buttonActivated, setButtonActivated] = useState(true)

    console.log(buttonActivated)

    return (
        <div className='article-vote'>
            <p>votes: {votes + voteModifier}</p>
            <button disabled={!buttonActivated} className='article-vote-button'
            onClick={() => { 
                addVoteArticle(article_id)
                .catch((err) => {
                    console.log("there is an error")
                });
                setVoteModifier((voteModifier) => {
                    return voteModifier + 1;
                });
                setButtonActivated(false);
                }}>Like!</button>
        </div>
    )
}

export default ArticleVote;