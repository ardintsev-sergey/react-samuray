import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTit-JnxMDv2GGAkG9_6lPM1695xErnnRg0Ng&usqp=CAU' alt='img'/>
      <div>
        My item
        <div>
          new post
        </div>
        <div className={styles.posts}>
          <div className={styles.item}>post 1</div>
          <div className={styles.item}>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;