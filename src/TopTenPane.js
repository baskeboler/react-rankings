import React, { Component } from 'react';
import RankingPosition from './RankingPosition';
import { ListGroup } from 'react-bootstrap';

class TopTenPane extends Component {
  constructor(props) {
    super(props);
    this.getTopTen=this.getTopTen.bind(this);
    this.renderPos=this.renderPos.bind(this);
    this.getCountries=this.getCountries.bind(this);
    console.log(this.getCountries());
  }
  renderPos(u) {
      return (
        <RankingPosition key={u.score} user={u} onSelect={this.props.onSelect} />
      );
  }

  getCountries() {
    var cMap = {};
    Object.keys(this.props.users).map((k) => {
      return this.props.users[k];
    }).forEach((u) => {cMap[u.address.city]=1;});
    return Object.keys(cMap);
  }

  getTopTen() {
    return Object.keys(this.props.users).map((k) => {
      return this.props.users[k];
    }).sort((a, b) => {
      return b.score - a.score;
    }).slice(0,9);
  }
  render() {
    return (
      <ListGroup >
        {this.getTopTen().map(this.renderPos)}
      </ListGroup>
    );
  }
}

export default TopTenPane;
