import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import RecepiesList from '../../../containers/RecepiesList/RecepiesList';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<RecepiesList store={store} />);
  return wrapper;
}

describe('<RecepiesList/>', () => {
  it('render correctly', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1)
  })
})