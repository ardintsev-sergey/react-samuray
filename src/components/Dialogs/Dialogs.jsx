import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newDialogElement = React.createRef();
  let onSendMessageClick = () => {
    props.sendMessage()
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body)
  }

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let newMessagesBody = state.newMessageBody;

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessagesBody}
            onChange={onNewMessageChange}
              placeholder="Enter your message"
              ref={newDialogElement}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
