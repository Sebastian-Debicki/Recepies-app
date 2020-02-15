import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import Auth from '../../../containers/Auth/Auth';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

let authMock;
const setup = (initialState = {}) => {
  authMock = jest.fn()
  const store = storeFactory(initialState)
  const wrapper = shallow(<Auth store={store} auth={authMock} />).dive().dive()
  return wrapper;
}

describe('<Auth/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup()
  })
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one form tag', () => {
    expect(wrapper.find('form').length).toBe(1)
  })

  it('render two input components', () => {
    expect(wrapper.find(Input).length).toBe(2)
  })

  it('render two Button components', () => {
    expect(wrapper.find(Button).length).toBe(2)
  })

  it('render error tag when error props = true', () => {
    const initialState = { auth: { error: true } }
    const wrapper = setup(initialState)
    expect(wrapper.find('.auth__error-message').length).toBe(1)
  })

  it('not render error tag when error props = false', () => {
    const initialState = { auth: { error: false } }
    const wrapper = setup(initialState)
    expect(wrapper.find('.auth__error-message').length).toBe(0)
  })
})