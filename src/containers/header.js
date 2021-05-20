// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

import { actionOpenMenu } from '../actions/header';


const mapStateToProps = (state, ownProps) => ({
  openMenu: state.header.openMenu,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actionOpenMenu: () => {
    dispatch(actionOpenMenu());
  }
});

// Container
const headerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default headerContainer;
