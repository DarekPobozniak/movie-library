import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('<Loader />', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find('.loader')).to.have.length(1);
  });
});
