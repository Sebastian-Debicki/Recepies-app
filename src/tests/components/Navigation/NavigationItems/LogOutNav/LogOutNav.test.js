import React from 'react';
import { shallow } from 'enzyme';
import LogOutNav from '../../../../../components/Navigation/NavigationItems/LogOutNav/LogOutNav';
import Link from '../../../../../components/UI/Link/Link';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<LogOutNav />);
})

describe('<LogOutNav/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one ul tag', () => {
    expect(wrapper.find('ul').length).toBe(1)
  })

  it('render two li tag', () => {
    expect(wrapper.find('li').length).toBe(2)
  })

  it('render one <Link> component', () => {
    expect(wrapper.find(Link).length).toBe(2)
  })
})