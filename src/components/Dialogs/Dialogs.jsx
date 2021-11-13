import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'


const Dialogs = (props) => { 
let newDialogElement = React.createRef();
let addDialog = () => {
  let text = newDialogElement.current.value;
  alert(text)
}

  let dialogsElements = props.state.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = props.state.messages
    .map(message => <Message message={message.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <textarea ref={newDialogElement}></textarea>
        <button onClick={ addDialog }>Add post</button>
      </div>
    </div>
  )
}

export default Dialogs;