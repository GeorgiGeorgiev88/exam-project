import { useState,useEffect } from 'react';
import * as eventService from '../../../servises/eventService';
import style from '../Comments/CommentsSection.module.css'

const CommentSection = ({ eventId, accessToken }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [event, setEvent] = useState([]);

    useEffect(() => {
        eventService
          .getOne(eventId)
          .then((result) => setEvent(result))
          .catch((err) => console.log(err));
      }, [eventId]);
      

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();

        eventService
            .addComment(eventId, accessToken, newComment)
            .then((comment) => setComments([...comments, comment]))
            .catch((err) => console.log(err));

        setNewComment('');
    };

    return (
        <div className={style.commentSection}>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
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
