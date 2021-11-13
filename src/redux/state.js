let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "It's my first postu", likesCount: 15 },
        { id: 3, message: "Haha", likesCount: 0 },
      ],
      newPostText: 'samurai',
    },
    dialogsPage: {
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
        { id: 5, message: "Go forward" },]
    },
    sidebar: {
      friends: [
        { id: 1, name: "Сергей", },
        { id: 2, name: "Женя", },
        { id: 3, name: "Никитос" },
      ],
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }

}

export default store;
window.store = store;