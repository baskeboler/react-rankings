import React, { Component, PropTypes } from 'react'
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
          <ListGroupItem header={this.props.user.name} onClick={this.handleSelect}
              bsStyle={this.props.isSelected?"info":""}>
            {this.props.user.username}
            <Badge pullRight>
              {this.props.user.score}
            </Badge>
          </ListGroupItem>
      );
  }
}
RankingPosition.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    credits: PropTypes.number,
    email: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.boolean
};

export default RankingPosition;
