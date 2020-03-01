import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../../components/UI/Modal/Modal';

let wrapper, closeModalHandlerMock;
beforeEach(() => {
  closeModalHandlerMock = jest.fn()
  wrapper = shallow(<Modal closeModalHandler={closeModalHandlerMock}>children-props</Modal>);
})

describe('<Modal/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('run closeModalHandler fn when backdrop was clicked', () => {
    wrapper.find('.backdrop').simulate('click')
    expect(closeModalHandlerMock).toHaveBeenCalled()
  })

  it('has a correct className props by default', () => {
    expect(wrapper.find('div').at(0).prop('className')).toEqual('container')
    expect(wrapper.find('div').at(1).prop('className')).toEqual('backdrop')
    expect(wrapper.find('div').at(2).prop('className')).toEqual('modal')
  })

  it('has a correct className props when props open = true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find('div').at(0).prop('className')).toEqual('container open')
    expect(wrapper.find('div').at(1).prop('className')).toEqual('backdrop open')
    expect(wrapper.find('div').at(2).prop('className')).toEqual('modal open')
  })
})