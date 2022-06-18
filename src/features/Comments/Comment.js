import React from 'react'
import { formatDate } from "../../Utils/formatDate";

function Comment({comment}) {

    const {text: commentText, rating, author, date} = comment

    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    )
}

export default Comment
