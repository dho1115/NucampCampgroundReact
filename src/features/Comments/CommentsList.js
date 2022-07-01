import React from 'react'
import { useSelector } from 'react-redux'
import { Col } from 'reactstrap'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { selectCommentsByCampsiteId } from './commentsSlice'


function CommentsList({ campsiteId}) {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

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
                <CommentForm campsiteId={campsiteId} />
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
