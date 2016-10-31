import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('renders properly', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('.not-found')).to.have.length(1);
  });
});
