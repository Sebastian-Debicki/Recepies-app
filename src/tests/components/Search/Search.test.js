import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../../components/Search/Search';
import Input from '../../../components/UI/Input/Input';
import Select from '../../../components/UI/Select/Select';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Search searchValue='some-value' />);
})

describe('<Search/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render one Input component', () => {
    expect(wrapper.find(Input).length).toBe(1)
  })

  it('render two Select components', () => {
    expect(wrapper.find(Select).length).toBe(2)
  })
})