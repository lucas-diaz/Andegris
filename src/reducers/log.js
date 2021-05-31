import { LOGIN_INPUT_CHANGE, LOGIN_SUBMIT, LOGIN_SUCCESS } from '../actions/log';

const initialState = {
  loading: false,
  isLogged: false,
  formData: {
    userName:'',
    email: '',
    password:''
  },
  userData: {

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
        case LOGIN_SUCCESS:
          
          return{
            ...state,
            userData: {
              ...action.payload
            }
          }
      default:
        return state;
  }
};

export default header;
