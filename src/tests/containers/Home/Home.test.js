import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../containers/Home/Home';
import Link from '../../../components/UI/Link/Link';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />);
})

describe('<Home/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one h1 tag', () => {
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('render one Link component', () => {
    expect(wrapper.find(Link).length).toBe(1)
  })
})