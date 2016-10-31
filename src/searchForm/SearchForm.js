import React, { Component, PropTypes } from 'react';

import './_styles.scss';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: 'movie title, keyword...',
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
    const { placeholder } = this.props;

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
            placeholder={placeholder}
            required
          />
          <button type="submit" className="button search-form__button">Search</button>
        </span>
      </form>
    );
  }
}

export default SearchForm;
