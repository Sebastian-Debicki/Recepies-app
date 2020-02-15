import React from 'react';
import { shallow } from 'enzyme';
import Link from '../../../../components/UI/Link/Link';
import { NavLink } from 'react-router-dom';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Link class="some-class" route="some-route" exact={true}>children-props</Link>)
})

describe('<Link/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one NavLink from react router', () => {
    expect(wrapper.find(NavLink).length).toBe(1)
  })

  it('has a correct class props', () => {
    expect(wrapper.find(NavLink).prop('className')).toEqual('some-class');
  })

  it('has a correct route props', () => {
    expect(wrapper.find(NavLink).prop('to')).toEqual('some-route');
  })

  it('has a correct exact props', () => {
    expect(wrapper.find(NavLink).prop('exact')).toEqual(true);
  })

  it('has a correct children props', () => {
    expect(wrapper.find(NavLink).prop('children')).toEqual('children-props');
  })
})