import React from 'react';

import GiphysIndex from './giphys_index';
// import { fetchSearchGiphys } from '../actions/giphy_actions';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit() {
    const { fetchSearchGiphys } = this.props;
    const { searchTerm } = this.state;

    fetchSearchGiphys(searchTerm);
  }

  render() {
    const { searchTerm } = this.state;
    const { giphys } = this.props;

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={searchTerm} />
        <button type="button" onClick={this.handleSubmit}>Submit</button>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
