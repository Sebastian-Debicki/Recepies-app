import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../../components/UI/Input/Input';

let wrapper, changedMock;
beforeEach(() => {
  changedMock = jest.fn()
  wrapper = shallow(<Input
    class='some-class'
    type='some-type'
    required={true}
    changed={changedMock}
    maxLength={12}
    minLength={6}
    name="some-name"
  />)
})

describe('<Input/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one div tag', () => {
    expect(wrapper.find('div').length).toBe(1)
  })

  it('render one input tag', () => {
    expect(wrapper.find('input').length).toBe(1)
  })

  it('render one label tag', () => {
    expect(wrapper.find('label').length).toBe(1)
  })

  it('has a correct class props', () => {
    expect(wrapper.find('input').prop('className')).toEqual('some-class')
  })

  it('has a correct type props', () => {
    expect(wrapper.find('input').prop('type')).toEqual('some-type')
  })

  it('has a correct required props', () => {
    expect(wrapper.find('input').prop('required')).toEqual(true)
  })

  it('has a correct changed props', () => {
    expect(wrapper.find('input').prop('onChange')).toEqual(changedMock)
  })

  it('has a correct minLength props', () => {
    expect(wrapper.find('input').prop('minLength')).toEqual(6)
  })

  it('has a correct maxLength props', () => {
    expect(wrapper.find('input').prop('maxLength')).toEqual(12)
  })

  it('has a correct id props', () => {
    expect(wrapper.find('input').prop('id')).toEqual("some-name")
  })

  it('has a correct placeholder props', () => {
    expect(wrapper.find('input').prop('placeholder')).toEqual("some-name")
  })

  it('runs changed function when user type in input area', () => {
    wrapper.find('input').simulate('change', ({ target: { value: 'some-value' } }))
    expect(changedMock).toHaveBeenCalled()
  })
})