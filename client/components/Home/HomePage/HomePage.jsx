import style from "../HomePage/HomePage.module.css";
import { useState, useEffect } from "react";

export default function HomePage() {
  // const [gifUrl, setGifUrl] = useState('https://media.tenor.com/Xb741cwE-xMAAAAC/explosion-boom.gif');

  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowGif(false);
    }, 3000);
  }, []);

  return (
    <div className={style.rapper}>
      {showGif && (
        <img
          className={style.boom}
          src="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20230825/3989627043062714301/1405368137318137862/1405368137318137862.gif"
          alt="Animated GIF"
        />
      )}
    </div>
  );
}
