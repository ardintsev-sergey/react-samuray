import React from 'react';
import styles from './Friends.module.css'
import FriendItem from './FriendItem'

const Friends = (props) => {
  let friendsElements = props.state.friends
    .map(friend => <FriendItem name={friend.name} id={friend.id} />);
  return (
    <div className>
      <div className>
        {friendsElements}
      </div>     
    </div>
  )
}

export default Friends;