import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('.page-header')).to.have.length(1);
  });

  it('renders title element', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1')).to.have.length(1);
  });
});
