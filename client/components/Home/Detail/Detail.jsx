import style from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";
import * as eventService from "../../../servises/eventService";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();

  const [oneEvent, setEvent] = useState({});
 

  useEffect(() => {
    eventService
      .getOne(id)
      .then((result) => setEvent(result))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={style.rapper}>
      <div className={style["detail-element"]}>
        <h2 className={style["detail-title"]}>{oneEvent.title}</h2>
        <img
          src={oneEvent.imageUrl}
          alt={oneEvent.title}
          className={style["detail-image"]}
        />
        <p className={style["detail-description"]}>{oneEvent.summary}</p>
      </div>
    </div>
  );
};

export default Detail;
