import { useState, useEffect } from "react";
import * as eventService from "../../../servises/eventService";
import Card from "../Card/Card";
import style from "../Catalog/Catalog.module.css";
import { useNavigate } from "react-router-dom";

export default function Catalog() {
  const [occasion, setOccasion] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    eventService.getAll()
      .then((result) => {
        setOccasion(result)
      })
      .catch((err) => {
        navigate('/404')
        console.log(err)
      });
  }, []);

  return (
    <>
      <div className={style.listBackGround}></div>
      <div className={style.catalogContent}>
        <h2 className={style.listTitle}>List of EVENTS</h2>
        <ul className={style.cardList}>
          {occasion.length > 0 ? (
            occasion.map((x) => <Card key={x._id} evn={x} />)
          ) : (
            <h2 className={style.noEvent}>No event yet</h2>
          )}
        </ul>
      </div>
    </>
  );
}
