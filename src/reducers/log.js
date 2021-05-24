import { LOGIN_INPUT_CHANGE, LOGIN_SUBMIT } from '../actions/log';

const initialState = {
  loading: false,
  isLogged: false,
  formData: {
    userName:'',
    email: '',
    password:''
  }
};

const header = (state = initialState, action = {}) => {
  switch(action.type){
    case LOGIN_INPUT_CHANGE :
      return{
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      }
      case LOGIN_SUBMIT:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
  }
};

export default header;
