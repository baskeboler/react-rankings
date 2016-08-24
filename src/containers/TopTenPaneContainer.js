import {connect} from 'react-redux';
import {selectUser} from '../actions';
import TopTenPane from '../TopTenPane';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    page: state.page
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (u) => {
      dispatch(selectUser(u));
    }
  }
}

const TopTenPaneContainer = connect(mapStateToProps, mapDispatchToProps)(TopTenPane);
export default TopTenPaneContainer;
