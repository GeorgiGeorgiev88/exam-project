import style from '../Footer/Footer.module.css'

const Footer = () => {
    return (
      <footer className={style.foot}>
        <p className='reactEx'>React  exam</p>
        <a href="https://softuni.bg/" className={style.softUni}>SoftUni</a>
        <p>All rights reserved &#169;</p>
      </footer>
    );
  };
  
 

  
  export default Footer;