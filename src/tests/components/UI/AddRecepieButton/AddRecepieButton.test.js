import React from 'react';
import { shallow } from 'enzyme';
import AddRecepieButton from '../../../../components/UI/AddRecepieButton/AddRecepieButton';

let wrapper, clickedMock;
clickedMock = jest.fn()
beforeEach(() => {
  wrapper = shallow(<AddRecepieButton clicked={clickedMock} />);
})

describe('AddRecepieButton', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has a correct className by default', () => {
    expect(wrapper.find('button').prop('className')).toEqual('add-button');
  })

  it('has a correct className when props open = true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find('button').prop('className')).toEqual('add-button open');
  })

  it('clicked function from props is called when button was clicked', () => {
    wrapper.find('button').simulate('click');
    expect(clickedMock).toHaveBeenCalled()
  })
})