// презентационная компонента
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import styles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {  
  let postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {        
    props.addPost();    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10" onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;