import React from 'react';
import { shallow } from 'enzyme';
import LogInNav from '../../../../../components/Navigation/NavigationItems/LogInNav/LogInNav';
import Link from '../../../../../components/UI/Link/Link';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<LogInNav />);
})

describe('<LogInNav/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one ul tag', () => {
    expect(wrapper.find('ul').length).toBe(1)
  })

  it('render three <Link> components', () => {
    expect(wrapper.find(Link).length).toBe(3)
  })
})