const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'; 

let initialState = {
  dialogs: [
    { id: 1, name: "Сергей", },
    { id: 2, name: "Женя", },
    { id: 3, name: "Никитос" },
    { id: 4, name: "Юля" },
    { id: 5, name: "Петя" },
    { id: 6, name: "Дима" },
    { id: 7, name: "Жора" },
  ],
  messages: [
    { id: 1, message: "Hi", },
    { id: 2, message: "Hello", },
    { id: 3, message: "Нaha" },
    { id: 4, message: "Let`s go" },
    { id: 5, message: "Go forward" },
  ],
  newMessageBody: '', 
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      state.newMessageBody = action.body;  
    return state;  
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 6, message: body});  
      return state;
    default: 
    return state;  
  }  
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer