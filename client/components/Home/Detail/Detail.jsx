import style from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";
import * as eventService from "../../../servises/eventService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../../contexts/uresContext';
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { _id, accessToken } = useContext(UserContext);
  const navigate = useNavigate()

  const [oneEvent, setEvent] = useState({});

  const eventCreator = oneEvent._ownerId === _id;
  console.log(`Is login user creator: ${eventCreator}`)

  useEffect(() => {
    eventService
      .getOne(id)
      .then((result) => setEvent(result))
      .catch((err) => console.log(err));
  }, [id]);

  const onDeleteClick = () => {
    alert("Are you sure?")
    eventService.remove(id, accessToken)
    navigate("/delete")
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
        {eventCreator ? <div className={style.actionBtn}>
          <Link to="/edit" className={style.editDetail}>
            Edit
          </Link>
          <button className={style.deleteDetail} onClick={onDeleteClick}>
            Delete
          </button>

        </div>
          : ""}

      </div>
    </>
  );
};

export default Detail;
