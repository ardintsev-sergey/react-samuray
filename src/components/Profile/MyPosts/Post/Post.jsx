import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU" alt="" />
      <div className={styles.item}>{props.message}</div>
      <span className={styles.item}>likes {props.likesCount}</span>
    </div>
  )
}

export default Post;