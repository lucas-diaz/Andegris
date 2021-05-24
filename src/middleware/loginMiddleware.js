import axios from 'axios';
import { LOGIN_SUBMIT} from '../actions/log';

const url = 'http://localhost:3000/auth/login';

const logMiddleware = (store) => (next) => (action) => {
  console.log('test 0')
  next(action);
  console.log('test 1')
  switch (action.type) {
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
          console.log(res.data);
        })
        .catch((err) => {
          // todo utiliser les message recu en reponse pour afficher le probleme
          console.error(err.response.data.error);
        });
      break;
    default:
  }
};


export default logMiddleware;
