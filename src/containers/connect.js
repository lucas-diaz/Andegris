// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import connexion  from 'src/components/Connect';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

// Container
const connexionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(connexion);

// == Export
export default connexionContainer;
