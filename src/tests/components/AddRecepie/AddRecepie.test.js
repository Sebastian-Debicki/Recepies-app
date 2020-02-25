import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import AddRecepie from '../../../components/AddRecepie/AddRecepie';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

let saveRecepie;
const setup = (initialState = {}) => {
  saveRecepie = jest.fn()
  const store = storeFactory(initialState)
  const wrapper = shallow(<AddRecepie store={store} saveRecepie={saveRecepie} />).dive().dive()
  return wrapper
}

describe('<AddRecepie/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({})
  })
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render two Input components', () => {
    expect(wrapper.find(Input).length).toBe(2)
  })

  it('render one Button component', () => {
    expect(wrapper.find(Button).length).toBe(1)
  })
})