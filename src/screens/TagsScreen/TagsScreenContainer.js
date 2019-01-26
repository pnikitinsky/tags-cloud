import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TagsScreen from './TagsScreen';
import { fetchTags } from 'src/actions/tag-cloud';


export function mapStateToProps(state) {
  return {
    tags: state.tags.list,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchTags,
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsScreen);
