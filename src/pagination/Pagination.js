import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from './actions';
import PaginationItem from './PaginationItem';

import './_styles.scss';

/**
 * Pagination component
 */
export class Pagination extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
  }

  /**
   * Handles click on pagination element
   * @param  {Number} pageNo - Numbe of a page that was clicked
   */
  handleOnClick = (pageNo) => {
    const { dispatch, onPageChange } = this.props;

    dispatch(setActivePage(pageNo));
    onPageChange(pageNo);
  }

  /**
   * Renders pagination elements
   * @return {ReactElement} markup
   */
  renderLinks = () => {
    const { totalPages, activePage } = this.props;

    return [...Array(totalPages)].map((item, i) =>
      <PaginationItem
        key={i}
        activePage={activePage}
        pageNo={i + 1}
        onClick={this.handleOnClick}
      />
    );
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <p className="pagination">{this.renderLinks()}</p>
    );
  }
}

const mapStateToProps = state => (
  {
    activePage: state.pagination.activePage,
  }
);

export default connect(mapStateToProps)(Pagination);
