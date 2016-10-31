import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';

describe('<SearchForm />', () => {
  const minProps = {
    onSubmit: () => {},
  };

  it('renders label element', () => {
    const wrapper = shallow(<SearchForm {...minProps} />);

    expect(wrapper.find('label')).to.have.length(1);
  });

  it('renders input field', () => {
    const wrapper = shallow(<SearchForm {...minProps} />);

    expect(wrapper.find('input')).to.have.length(1);
  });

  it('renders button element', () => {
    const wrapper = shallow(<SearchForm {...minProps} />);

    expect(wrapper.find('button')).to.have.length(1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<SearchForm {...minProps} />);

    expect(wrapper.props().placeholder).to.equal('movie title, keyword...');
    wrapper.setProps({ placeholder: 'put some title here' });
    expect(wrapper.props().placeholder).to.equal('put some title here');
  });
});
