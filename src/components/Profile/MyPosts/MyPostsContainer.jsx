// контейнерная компонента для презентационной
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => { 
  let state = props.store.getState();  

  let addPost = () => {        
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {    
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={onPostChange} 
            addPost={addPost}
            posts={state.profilePage.posts}/>    
  )
}

export default MyPostsContainer;