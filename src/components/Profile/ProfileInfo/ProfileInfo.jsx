import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div >
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTit-JnxMDv2GGAkG9_6lPM1695xErnnRg0Ng&usqp=CAU' alt='img'/>
      <div className={styles.descrBlock}>ava + descr</div>
     </div>
  )
}

export default ProfileInfo;