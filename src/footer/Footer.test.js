import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.page-footer')).to.have.length(1);
  });

  it('renders copyrights element', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('small')).to.have.length(1);
  });
});
