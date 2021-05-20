 import { ACTION_OPEN_MENU } from '../actions/header';

const initialState = {
  openMenu: false,
};

const header = (state = initialState, action = {}) => {
  switch(action.type){
    case ACTION_OPEN_MENU :
      return {
        ...state,
        openMenu: !state.openMenu,
      };
      default:
        return state;
  }
};

export default header;
