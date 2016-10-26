import React, { Component } from 'react';
import SearchForm from '../searchForm/SearchForm';

class MovieList extends Component {
  handleSearchFormSubmit = (value) => {
    console.log(value);
  }

  render() {
    return (
      <SearchForm
        onSubmit={this.handleSearchFormSubmit}
      />
    );
  }
}

export default MovieList;
