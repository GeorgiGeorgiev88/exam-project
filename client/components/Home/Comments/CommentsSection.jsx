import { useState, useEffect } from 'react';
import * as eventService from '../../../servises/eventService';
import style from '../Comments/CommentsSection.module.css';
import { useContext } from 'react';
import UserContext from '../../../contexts/uresContext';
import { useNavigate } from 'react-router-dom';

const CommentSection = ({ eventId, accessToken }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const navigate = useNavigate()
    const { email, _id } = useContext(UserContext);




    useEffect(() => {
        eventService.getComments()
            .then((result) => {
                setComments(result)
            })
            .catch((err) => {
                navigate('/404')
                console.log(err)
            });
    }, []);

    const currentEventComments = comments.filter(x => x.eventId === eventId)


    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();

        if (newComment.length === 0) {
            return alert("Text fild must not be empty")
        }

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
