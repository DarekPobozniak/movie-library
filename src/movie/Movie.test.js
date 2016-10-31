import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Movie } from './Movie';
import SearchForm from '../searchForm/SearchForm';
import Message from '../message/Message';
import MovieItem from '../movie/MovieItem';

describe('<Movie />', () => {
  const minProps = {
    title: 'Rocky V',
    description: 'xxx',
    params: {
      id: '5',
    },
    isFetching: false,
    dispatch: () => {},
  };

  it('contains an <SearchForm/> component', () => {
    const wrapper = mount(<Movie {...minProps} />);

    expect(wrapper.find(SearchForm)).to.have.length(1);
  });

  it('contains an <Message/> component when fetching error', () => {
    const wrapper = mount(<Movie {...minProps} />);

    wrapper.setState(({ fetchingError: true }));
    expect(wrapper.find(Message)).to.have.length(1);
  });

  it('contains an <MovieItem /> component when fetching success', () => {
    const wrapper = mount(<Movie {...minProps} />);

    wrapper.setState(({ fetchingError: false }));
    expect(wrapper.find(MovieItem)).to.have.length(1);
  });
});
