import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';

export function mapStateToProps(state) {
  return {};
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {

    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
