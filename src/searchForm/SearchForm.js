import React, { Component, PropTypes } from 'react';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    inputValue: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  }

  handleValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <form className="form-search" onSubmit={this.handleSubmit}>
        <label htmlFor="search-input">Search movie</label>
        <input
          type="search"
          id="search-input"
          onChange={this.handleValueChange}
          value={this.state.inputValue}
          required
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
