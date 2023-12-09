import style from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";
import * as eventService from "../../../servises/eventService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../../contexts/uresContext';
import { useNavigate } from "react-router-dom";
import CommentSection from "../Comments/CommentsSection";

const Detail = () => {
  const { id } = useParams();
  const { _id, accessToken } = useContext(UserContext);
  const navigate = useNavigate();

  const [oneEvent, setEvent] = useState({});
  const eventCreator = oneEvent._ownerId === _id;

  useEffect(() => {
    eventService
      .getOne(id)
      .then((result) => setEvent(result))
      .catch((err) => console.log(err));
  }, [id]);

  const onDeleteClick = () => {
    const userConfirmed = window.confirm("Do you want to delete the event?");
    if (userConfirmed) {
      eventService.remove(id, accessToken);
      navigate("/delete");
    } else {
      console.log("Not deleted")
    }
  }


  return (
    <>
      <div className={style.rapper}></div>
      <div className={style["detail-element"]}>
        <h2 className={style["detail-title"]}>{oneEvent.title}</h2>
        <img
          src={oneEvent.imageURL}
          alt={oneEvent.title}
          className={style["detail-image"]}
        />
        <p className={style["detail-description"]}>{oneEvent.summary}</p>

        {eventCreator && (
          <div className={style.actionBtn}>
            <Link to={`/edit/${id}`} className={style.editDetail}>
              Edit
            </Link>
            <button className={style.deleteDetail} onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        )}
        <CommentSection eventId={id} accessToken={accessToken} />
      </div>
    </>
  );
};

export default Detail;
