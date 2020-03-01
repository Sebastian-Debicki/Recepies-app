import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utilities';
import RecepiePage from '../../../containers/RecepiePage/RecepiePage';
import { recepiesList } from '../../dummyData/recepies';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<RecepiePage store={store} />).dive().dive()
  return wrapper;
}

describe('<RecepiePage/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
    wrapper.setProps({ recepies: recepiesList, match: { params: { id: recepiesList[0].id } } });
  })
  it('render correctly', () => {

    expect(wrapper.length).toBe(1);
  })

  it('render Spinner when is no recepie', () => {
    const wrapper = setup()
    expect(wrapper.find(Spinner).length).toBe(1)
  })

  it('render recepiePage when recepie was loaded correctly', () => {
    expect(wrapper.find('.recepie-page').length).toBe(1);
  })

  it('render correct tag by default', () => {
    expect(wrapper.find(Input).at(1).length).toBe(0)
    expect(wrapper.find('.recepie-page__name').length).toBe(1)
  })

  it('render correct tag when edit backdrop was clicked', () => {
    wrapper.find('.recepie-page__backdrop').at(1).simulate('click');
    expect(wrapper.find(Input).length).toBe(1)
    expect(wrapper.find('.recepie-page__name').length).toBe(0)
  })

  it('render correct tag when edit backdrop was clicked second time', () => {
    wrapper.find('.recepie-page__backdrop').at(1).simulate('click');
    wrapper.find('.recepie-page__backdrop').at(1).simulate('click');
    expect(wrapper.find(Input).length).toBe(0)
    expect(wrapper.find('.recepie-page__name').length).toBe(1)
  })

  it('has a correct include-menu-box className by default', () => {
    expect(wrapper.find('.include-menu-box').prop('className')).toEqual('include-menu-box')
  })

  it('has a correct include-menu-box className when prop open = true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find('.include-menu-box').prop('className')).toEqual('include-menu-box open')
  })

  it('has a correct name description displayed value', () => {
    expect(wrapper.find('.recepie-page__text').at(0).text()).toEqual(recepiesList[0].calories)
  })

  it('has a correct name name displayed value', () => {
    expect(wrapper.find('.recepie-page__name').text()).toEqual(recepiesList[0].name)
  })

  it('has a correct name description displayed value', () => {
    expect(wrapper.find('.recepie-page__text').at(1).text()).toEqual(recepiesList[0].description)
  })

  it('has a correct number of displayed ingreadients', () => {
    expect(wrapper.find('.recepie-page__ingredients-list__ingredient').length).toBe(recepiesList[0].ingredients.length)
  })

  it('has a correct textarea for preparation value', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(recepiesList[0].preparation)
  })

})
