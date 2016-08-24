import React, { Component, PropTypes } from 'react';
import RankingPosition from './RankingPosition';
import { ListGroup, Pagination } from 'react-bootstrap';

class TopTenPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.getTopTen=this.getTopTen.bind(this);
    this.renderPos=this.renderPos.bind(this);
    this.getCountries=this.getCountries.bind(this);
    this.changePage=this.changePage.bind(this);
    this.getPagination=this.getPagination.bind(this);
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
    var start = (this.state.activePage -1)*10,
    end = start+9;
    return Object.keys(this.props.users).map((k) => {
      return this.props.users[k];
    }).sort((a, b) => {
      return b.score - a.score;
    }).slice(start, end);
  }
  changePage(page) {
    this.setState({activePage: page});
  }
  getPagination() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={10}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.changePage}
      />
    )
  }
  render() {
    return (
      <div>
        {this.getPagination()}
        <ListGroup >
        {this.getTopTen().map(this.renderPos)}
        </ListGroup>
      </div>
    );
  }
}
TopTenPane.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    credits: PropTypes.number,
    score: PropTypes.number
  })),
  onSelect: PropTypes.func.isRequired
};

export default TopTenPane;
