// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import home from 'src/components/Home';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

// Container
const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);

// == Export
export default homeContainer;
