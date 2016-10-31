import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from './Message';

describe('<Message />', () => {
  it('renders info message properly', () => {
    const wrapper = shallow(<Message>Oh no</Message>);

    expect(wrapper.contains(<p className="message message--info">Oh no</p>)).to.equal(true);
  });

  it('renders alert message properly', () => {
    const wrapper = shallow(<Message type="alert">Oh no</Message>);

    expect(wrapper.contains(<p className="message message--alert">Oh no</p>)).to.equal(true);
  });
});
