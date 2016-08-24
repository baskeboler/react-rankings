import {connect} from 'react-redux';
import UserSettingsPane from '../UserSettingsPane';
import {saveUser} from '../actions';

const mapStateToProps = (state) => {

  return {
    user: state.users[55]

  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (u) => {
      dispatch(saveUser(u));
    }
  };
}
const UserSettingsPaneContainer = connect(mapStateToProps, mapDispatchToProps)(UserSettingsPane);
export default UserSettingsPaneContainer;
