import style from '../PageNotFound/PageNotFound.module.css'
import { useEffect } from 'react';

export default function PageNotFound() {
    useEffect(() => {
     
      const redirectTimeout = setTimeout(() => {
        window.location.href = '/';
      }, 2000);
  
      
      return () => clearTimeout(redirectTimeout);
    }, []);
  
    return (
      <div className={style.background}>
        <h2 className={style.errorMessage}>404 Page not found</h2>
      </div>
    );
  }