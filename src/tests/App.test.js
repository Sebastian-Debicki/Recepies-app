import React from 'react';
import { shallow } from 'enzyme';
import { UnconectedApp } from '../App';


describe('<App/>', () => {
  const onTryAutoSignIn = jest.fn();
  const fetchRecepies = jest.fn();
  const wrapper = shallow(<UnconectedApp onTryAutoSignIn={onTryAutoSignIn} fetchRecepies={fetchRecepies} />);
  wrapper.instance().componentDidMount();

  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('onTryAutoSignIn runs after component mount', () => {
    expect(onTryAutoSignIn).toHaveBeenCalled()
  })

  it('fetchRecepies runs after component mount', () => {
    expect(fetchRecepies).toHaveBeenCalled()
  })
})