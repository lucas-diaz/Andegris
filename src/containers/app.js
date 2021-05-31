// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import app from 'src/components/App';
import {checkAuth} from '../actions/log';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  checkAuth: () => {
    dispatch(checkAuth());
  }
});

// Container
const appContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(app);

// == Export
export default appContainer;
