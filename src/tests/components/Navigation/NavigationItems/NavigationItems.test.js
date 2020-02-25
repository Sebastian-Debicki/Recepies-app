import React from 'react';
import { shallow } from 'enzyme';
import NavigationItems from '../../../../components/Navigation/NavigationItems/NavigationItems';
import LogInNav from '../../../../components/Navigation/NavigationItems/LogInNav/LogInNav';
import LogOutNav from '../../../../components/Navigation/NavigationItems/LogOutNav/LogOutNav';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItems />)
})

describe('<NavigationItems', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render <LogInNav/> when props isAuth=true', () => {
    wrapper.setProps({ isAuth: true })
    expect(wrapper.find(LogInNav).length).toBe(1)
  })

  it('render <LogOutNav/> when props isAuth=false', () => {
    wrapper.setProps({ isAuth: false })
    expect(wrapper.find(LogOutNav).length).toBe(1)
  })
})