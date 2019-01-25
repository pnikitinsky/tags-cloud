import { connect } from 'react-redux';
import TagsScreen from './TagsScreen';

export function mapStateToProps(state) {
  return {
    tags: state.tags.list,
  };
}

export default connect(
  mapStateToProps,
  null
)(TagsScreen);
