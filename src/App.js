import React, { Component } from 'react';
import sampleData from './sample-data';
import TopTenPane from './TopTenPane';
import UserInfoPane from './UserInfoPane';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = sampleData;
    // this.setState({selectedUser : {}});
    this.selectUser=this.selectUser.bind(this);
  }
  selectUser(u) {
    this.setState({selectedUser: u});
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col md={6}>
            <TopTenPane users={this.state.users} onSelect={this.selectUser}/>

          </Col>
          <Col md={6}>
            <UserInfoPane user={this.state.selectedUser} />
          </Col>
        </Row>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
