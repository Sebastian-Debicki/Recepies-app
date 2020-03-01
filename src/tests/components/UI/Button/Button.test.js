import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../../components/UI/Button/Button';

let wrapper, clickedMock;
beforeEach(() => {
  clickedMock = jest.fn()
  wrapper = shallow(<Button class="some-class" clicked={clickedMock} />);
})

describe('<Button/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has a correct class props', () => {
    expect(wrapper.prop('className')).toEqual('some-class')
  })

  it('has a correct clicked props', () => {
    expect(wrapper.prop('onClick')).toEqual(clickedMock)
  })

  it('function "clicked" runs when button was clicked', () => {
    wrapper.simulate('click')
    expect(clickedMock).toHaveBeenCalled()
  })
})