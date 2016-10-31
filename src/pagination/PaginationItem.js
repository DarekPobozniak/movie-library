import React, { PropTypes } from 'react';

/**
 * Pagination Item component
 * @param  {Number}   options.activePage - Active page number
 * @param  {Number}   options.pageNo     - Number of a currently rendered item
 * @param  {Function} options.onClick    - Function to be called after item click
 * @return {ReactElement} markup
 */
const PaginationItem = ({ activePage, pageNo, onClick }) => {
  const handleClick = () => {
    onClick(pageNo);
  };

  return (
    <button onClick={handleClick} disabled={pageNo === activePage} className="pagination__item">{pageNo}</button>
  );
};

PaginationItem.propTypes = {
  activePage: PropTypes.number.isRequired,
  pageNo: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationItem;
