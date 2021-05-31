import axios from 'axios';
import { LOGIN_SUBMIT, loginSuccess, CHECK_AUTH } from '../actions/log';


const url = 'http://localhost:3000/auth/login';

const logMiddleware = (store) => (next) => (action) => {

  const { dispatch } = store;
  next(action);
  
  const token = localStorage.getItem('access_token');
  switch (action.type) {

    // a l'envoie du formulaire de connexion
    case LOGIN_SUBMIT:
      // Lancer ma requête
      axios({
        method: 'post',
        url,
        data: store.getState().log.formData,
      })
        .then((res) => {
          console.log('test reussi')
          localStorage.setItem('access_token', res.data.token);
          
          delete res.data.token;
          dispatch(loginSuccess(res.data.data))
        })
        .catch((err) => {
          // todo utiliser les message recu en reponse pour afficher le probleme
          console.error(err.response.data.error);
        });
      break;
      //check de l'autentification via token
      case CHECK_AUTH:
        axios({
          method: 'post',
          url: 'http://localhost:3000/auth/token',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
          .then((res) => {
              console.log(res.data.user)
              dispatch(loginSuccess(res.data.user));
          })
          .catch((err) => {
            console.error(err);
          });
        break;
    default:
  }
};


export default logMiddleware;
