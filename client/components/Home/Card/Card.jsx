import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ evn }) => {
  return (
    <li className={style.flex}>
      <div className={style.card}>
        <img
          src={evn.imageUrl}
          alt={evn.title}
          className={style["card-image"]}
        />
        <div className={style["card-content"]}>
          <h2 className={style["card-title"]}>{evn.title}</h2>
          <Link to={`detail/${evn._id}`} className={style.eventDetail}>
          Details
        </Link>
        </div>
      </div>
    </li>
  );
};

export default Card;
