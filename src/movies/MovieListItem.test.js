import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MovieListItem from './MovieListItem';

describe('<MovieListItem />', () => {
  const minProps = {
    id: 1234,
    title: 'Rocky V',
    voteAverage: 5.5,
    overview: 'Short description',
  };

  it('renders properly', () => {
    const wrapper = shallow(<MovieListItem {...minProps} />);

    expect(wrapper.find('.movie-list__item')).to.have.length(1);
  });

  it('renders description properly', () => {
    const wrapper = shallow(<MovieListItem {...minProps} />);

    expect(wrapper.find('.movie-list__item__description').text()).to.have.string('Short description');
  });
});
