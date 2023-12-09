import { useState, useEffect } from 'react';
import * as eventService from '../../../servises/eventService';
import style from '../Comments/CommentsSection.module.css';
import { useContext } from 'react';
import UserContext from '../../../contexts/uresContext';

const CommentSection = ({ eventId, accessToken }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const { email, _id } = useContext(UserContext);

    console.log(`Event creator: ${_id}`)
    console.log(`Event id: ${eventId}`)
    console.log(comments)

    useEffect(() => {
        eventService.getComments()
            .then((result) => {
                setComments(result)
            })
            .catch((err) => console.log(err));
    }, []);

    const currentEventComments = comments.filter(x => x.eventId === eventId)


    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();

        eventService
            .addComment(email, eventId, accessToken, newComment)
            .then((comment) => setComments([...comments, comment]))
            .catch((err) => console.log(err));

        setNewComment('');
    };

    return (
        <div className={style.commentSection}>
            <h3>Comments</h3>
            <ul>
                {currentEventComments.length > 0 ? (
                    currentEventComments.map((comment) => (
                        <li key={comment._id} className={style.comments}>
                            <p>{`User: ${comment.eventCreator}`}</p>
                            <p>{`Text: ${comment.text}`}</p>
                        </li>
                    ))
                ) : (
                    <li className={style.noComments}>
                        No comments...
                    </li>
                )}
            </ul>


            <form onSubmit={handleSubmitComment}>
                <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                />
                <button type="submit">Add Comment</button>
            </form>

        </div>
    );
};

export default CommentSection;
