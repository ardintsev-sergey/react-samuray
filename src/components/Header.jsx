import React from 'react';
import style from './Header.module.css'

const Header = () => {
  return (
  <header className={style.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vFX9tv64JjrobsjPi_62hz5WBWU0FXjfA&usqp=CAU' alt="logo" />
  </header>
  )
}

export default Header