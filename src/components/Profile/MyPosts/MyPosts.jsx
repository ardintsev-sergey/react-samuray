import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
        My posts
        <div>
         <textarea name="" id="" cols="30" rows="10"></textarea>
         <button>Add post</button>
        </div>
        <Post className={styles.item} message="Hi, how are you" likesCount='5'/>
        <Post className={styles.item} message="It's my first post" likesCount='15'/>
        <Post className={styles.item} message="Ha ha"/>
      </div>    
  )
}

export default MyPosts;