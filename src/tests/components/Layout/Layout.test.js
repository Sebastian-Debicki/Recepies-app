import React from 'react';
import Layout from '../../../components/Layout/Layout';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import Spinner from '../../../components/UI/Spinner/Spinner';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Layout store={store}>children-props</Layout>).dive().dive()
  return wrapper;
}

describe('<Layout/>', () => {
  it('render correctly', () => {
    const initialState = {}
    const wrapper = setup(initialState);
    expect(wrapper.length).toBe(1)
  })
})

describe('<Layout/> loading = true', () => {
  it('render <Spinner/> component when loading is true', () => {
    const initialState = { auth: { loading: true } }
    const wrapper = setup(initialState);
    expect(wrapper.find(Spinner).length).toBe(1)
  })
})

describe('<Layout/> loading = false', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { auth: { loading: false } }
    wrapper = setup(initialState);
  })

  it('render one main tag', () => {
    expect(wrapper.find('main').length).toBe(1)
  })

  it('render NavigationItems component', () => {
    expect(wrapper.find(NavigationItems).length).toBe(1)
  })

  it('has a correct children props in main tag', () => {
    expect(wrapper.find('main').text()).toBe('children-props')
  })
})