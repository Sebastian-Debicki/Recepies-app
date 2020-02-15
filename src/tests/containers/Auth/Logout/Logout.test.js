import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../../../../containers/Auth/Logout/Logout';
import { storeFactory } from '../../../utilities';

let logoutMock;
const setup = (initialState = {}) => {
  logoutMock = jest.fn()
  const store = storeFactory(initialState);
  const wrapper = shallow(<Logout store={store} />).dive().dive()
  return wrapper;
}

let wrapper;
beforeEach(() => {
  wrapper = setup()
})

describe('<Logout/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })
})