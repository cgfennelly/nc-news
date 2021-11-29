import { Link } from "react-router-dom";

const Sort = () => {

    return (
        <div className="sort-bar">
            <p className='sort-date-up'>Date Created ↑</p>
            <p className='sort-comments-up'>Comment Counts ↑</p>
            <p className='sort-votes-up'>Votes ↑</p>
            <p className='sort-date-down'>Date Created ↓</p>
            <p className='sort-comments-down'>Comment Counts ↓</p>
            <Link to='/articles?sort_by=votes&order=ASC' >
                <p className='sort-votes-down'>Votes ↓</p>
            </Link>
        </div>
    )
}

export default Sort;