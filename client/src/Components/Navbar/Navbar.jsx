import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.imgContainer}>
        <Link to='/home' > <img src='https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png' alt='Logo Henry'/> </Link>
      </div>
      <div className={styles.navegador}> 
        <div className={styles.links}>
          <Link to='/home'>Home</Link>
          <Link to='/create'>Create</Link>
          <Link to='/favs'>Favs</Link>
        </div>
      </div>
      <Link to='/' style={{alignItem: 'flexEnd',}}>
        <h4 >Log Out</h4>
      </Link>
    </div>
  )
}

export default Navbar