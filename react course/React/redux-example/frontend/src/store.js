import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  asideShow: false,
  theme: 'light',
  isLoggedIn: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
    case 'login':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
