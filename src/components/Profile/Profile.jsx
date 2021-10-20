import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTit-JnxMDv2GGAkG9_6lPM1695xErnnRg0Ng&usqp=CAU' alt='img'/>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  )
}

export default Profile;