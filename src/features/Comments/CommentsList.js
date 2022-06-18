import React from 'react'
import { Col } from 'reactstrap'
import Comment from './Comment'
import { selectCommentsByCampsiteId } from './commentsSlice'


function CommentsList({ campsiteId}) {
    const comments = selectCommentsByCampsiteId(campsiteId)

    if (comments && comments.length) {
        return (
            <Col md='5' className='m-1'>
                <h5>COMMENTS.</h5>
                {
                    comments.map(comment => {
                        return(
                            <Comment key={comment.id} comment={comment} />
                        )
                    })
                }
            </Col>
        )
    }
    
    return (
        <Col md='5' className='m-1'>
            <h5>NO COMMENTS YET.</h5>
        </Col>
    )
}

export default CommentsList
