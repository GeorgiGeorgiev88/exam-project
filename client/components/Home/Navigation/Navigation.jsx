import { Link } from 'react-router-dom';
import style from './Navigation.module.css'
import { useContext } from 'react';
import UserContext from '../../../contexts/uresContext';


const Navigation = () => {

  const {
    authenticated,
    email,
    username,
  } = useContext(UserContext);

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <Link to="/" className={style.logo}><i className="fa-solid fa-earth-americas">Event that changed the world</i></Link>
        <div className={style.navLinks}>
          {authenticated ? <div className={style.user}>
            <div className={style.userGreetings}>{`Hello ${email}`}</div>
            <Link to="/catalog" className={style.navLinks}>Catalog</Link>
            <Link to="/create" className={style.navLinks}>Create Event</Link>
            <Link to="/logout" className={style.navLinks}>Logout</Link>
          </div> :
            <div className={style.guest}>
              <Link to="/login" className={style.navLinks}>Login</Link>
              <Link to="/register" className={style.navLinks}>Register</Link>
            </div>
          }


        </div>
      </nav>
    </div>
  );
};

export default Navigation;