import React from 'react';
import styles from './Friends.module.css'
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
  return (
    <div className={styles.FriendsItem + ' ' + styles.active}>
      <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default FriendItem;