import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../../components/UI/Spinner/Spinner';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Spinner />)
})

describe('<Spinner/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has a one div tag', () => {
    expect(wrapper.find('div').length).toBe(1)
  })
})