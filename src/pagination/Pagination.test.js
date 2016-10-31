import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Pagination } from './Pagination';
import PaginationItem from './PaginationItem';

describe('<Pagination />', () => {
  const minProps = {
    dispatch: () => {},
    onPageChange: () => {},
    totalPages: 3,
    activePage: 1,
  };

  const wrapper = mount(<Pagination {...minProps} />);

  it('renders properly', () => {
    expect(wrapper.find('.pagination')).to.have.length(1);
  });

  it('renders good amount of <PaginationItem /> component', () => {
    expect(wrapper.find(PaginationItem)).to.have.length(3);
  });
});
