import React, { Component } from 'react';
import sampleData from './sample-data';
import TopTenPaneContainer from './containers/TopTenPaneContainer';
import UserInfoPaneContainer from './containers/UserInfoPaneContainer';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col} from 'react-bootstrap';
import UserSettingsPaneContainer from './containers/UserSettingsPaneContainer';
import {selectUser, saveUser, changePage, addUser} from './actions';
import {dispatch} from 'redux';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = sampleData;
    var self = this;
    Object.keys(sampleData.users).map((k) => {
      return sampleData.users[k];
    }).forEach((u) => {
      props.store.dispatch(addUser(u));
    });
    // this.setState({selectedUser : {}});
    this.selectUser=this.selectUser.bind(this);
    this.saveUser=this.saveUser.bind(this);
  }
  selectUser(u) {
    this.setState({selectedUser: u});
  }
  saveUser(u) {
    var users = this.state.users;
    users[u.email]=u;
    this.setState({users:users});
  }
  render() {
    return (
      <div className="App">
        <Row>
          <Col md={6}>
            <TopTenPaneContainer/>
          </Col>
          <Col md={6}>
            <UserInfoPaneContainer  />
            <UserSettingsPaneContainer />
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
