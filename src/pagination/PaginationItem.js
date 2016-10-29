import React, { PropTypes } from 'react';

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
