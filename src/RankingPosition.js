import React, { Component } from 'react'
import { ListGroupItem, Badge } from 'react-bootstrap';

class RankingPosition extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect() {
    this.props.onSelect(this.props.user);
  }
  render() {
      return (
          <ListGroupItem header={this.props.user.name} onClick={this.handleSelect}>
            {this.props.user.username}
            <Badge pullRight>
              {this.props.user.score}
            </Badge>
          </ListGroupItem>
      );
  }
}

export default RankingPosition;
