import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MovieItem from './MovieItem';

describe('<MovieItem />', () => {
  const minProps = {
    title: 'Rocky V',
  };

  it('renders properly', () => {
    const wrapper = shallow(<MovieItem />);

    expect(wrapper.find('.movie')).to.have.length(1);
  });

  it('renders title properly', () => {
    const wrapper = shallow(<MovieItem {...minProps} />);

    expect(wrapper.find('.movie__title').text()).to.have.string('Rocky V');
  });
});
