// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import connexion  from 'src/components/Connect';
import {loginInputChange, loginSubmit} from '../actions/log';

const mapStateToProps = (state, ownProps) => ({
  formData: state.log.formData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInputChange: (payload) => {
    console.log(payload)
    dispatch(loginInputChange(payload))
  },
  onFormSubmit: () =>{
    dispatch(loginSubmit())
  }
});

// Container
const connexionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(connexion);

// == Export
export default connexionContainer;
