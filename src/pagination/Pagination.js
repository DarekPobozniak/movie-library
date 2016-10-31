import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from './actions';
import PaginationItem from './PaginationItem';

import './_styles.scss';

export class Pagination extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
  }

  handleOnClick = (pageNo) => {
    const { dispatch, onPageChange } = this.props;

    dispatch(setActivePage(pageNo));
    onPageChange(pageNo);
  }

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
