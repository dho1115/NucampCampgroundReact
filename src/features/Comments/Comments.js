import React from 'react'
import { formatDate } from "../../Utils/formatDate";

function Comments({comment}) {

    const {text, rating, author, date} = comment

    return (
        <p>
            {text}
            <br />
            {rating}/5 stars -- {author}
        </p>
    )
}

export default Comments
