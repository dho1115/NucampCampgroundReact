import React from 'react'
import { useSelector } from 'react-redux'
import { Col } from 'reactstrap'
import Error from '../../Components/Error'
import Loading from '../../Components/Loading'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { selectCommentsByCampsiteId } from './commentsSlice'


function CommentsList({ campsiteId}) {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector(state => state.comments.errMsg);

    if (isLoading) {
        return <Loading />
    }

    if (errMsg) {
        return <Error errMsg={errMsg} />
    }

    if (comments && comments.length > 0) {
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
