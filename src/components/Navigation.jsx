import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

function Navigation(props) {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav id={styles["nav"]} className={`${(!props.transparentWhileDocked || scrollPosition > 10) && styles["nav-colored"]}`}>
        
      </nav>
    </header>
  );
}

export default Navigation;
