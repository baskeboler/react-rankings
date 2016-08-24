import { connect } from 'react-redux'
import UserInfoPane from '../UserInfoPane';

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser
  };
};
 const mapDispatchToProps = (dispatch) => {
   return {};
 };

 const UserInfoPaneContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfoPane);
export default UserInfoPaneContainer;
