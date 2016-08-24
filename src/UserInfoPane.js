import React, {Component} from 'react';
import {Panel, Well } from 'react-bootstrap';

class UserInfoPane extends Component {
  render() {
    if (this.props.user && this.props.user.name) {
      var title = <h2>{this.props.user.name}</h2>;
      var footer = <span><strong>Credits: </strong> {this.props.user.credits}</span>;
      return (
        <Panel header={title} footer={footer}>
          <dl>
            <dt>Name</dt>
            <dd>{this.props.user.name}</dd>
            <dt>Email</dt>
            <dd>{this.props.user.email}</dd>
            <dt>Phone</dt>
            <dd>{this.props.user.phone}</dd>
            <dt>Company</dt>
            <dd>{this.props.user.company.name}</dd>
          </dl>
        </Panel>
      );

    } else {
      return (
        <Well>
          No user selected
        </Well>
      )
    }
  }
}

export default UserInfoPane;
