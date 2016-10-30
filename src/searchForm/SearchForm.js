import React, { Component, PropTypes } from 'react';

import './_styles.scss';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    inputValue: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const value = this.state.inputValue.trim();

    if (!value) {
      return;
    }

    this.props.onSubmit(value);
  }

  handleValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search-input"className="search-form__label">Search movie</label>
        <span className="search-form__input-wrapper">
          <input
            type="search"
            className="search-form__input"
            id="search-input"
            onChange={this.handleValueChange}
            value={this.state.inputValue}
            placeholder="movie title, keyword..."
            required
          />
          <button type="submit" className="button search-form__button">Search</button>
        </span>
      </form>
    );
  }
}

export default SearchForm;
