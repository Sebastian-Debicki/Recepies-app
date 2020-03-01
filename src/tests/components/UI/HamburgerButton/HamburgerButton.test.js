import React from 'react';
import { shallow } from 'enzyme';
import HamburgerButton from '../../../../components/UI/HamburgerButton/HamburgerButton';

let wrapper, clickedMock;
beforeEach(() => {
  clickedMock = jest.fn()
  wrapper = shallow(<HamburgerButton clicked={clickedMock} />);
})

describe('<HamburgerButton/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('clicked fn from props was called when button was clicked', () => {
    wrapper.find('button').simulate('click');
    expect(clickedMock).toHaveBeenCalled()
  })

  it('has a correct className by default', () => {
    expect(wrapper.find('button').prop('className')).toEqual('hamburger')
    expect(wrapper.find('div').prop('className')).toEqual('hamburger__box')
    expect(wrapper.find('span').at(0).prop('className')).toEqual('hamburger__item hamburger__item--1')
  })

  it('has a correct className when props open = true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find('button').prop('className')).toEqual('hamburger open')
    expect(wrapper.find('div').prop('className')).toEqual('hamburger__box open')
    expect(wrapper.find('span').at(0).prop('className')).toEqual('hamburger__item hamburger__item--1 open')
  })
})