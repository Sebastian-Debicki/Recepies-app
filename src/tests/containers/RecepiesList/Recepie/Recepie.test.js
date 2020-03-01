import React from 'react';
import { shallow } from 'enzyme';
import Recepie from '../../../../containers/RecepiesList/Recepie/Recepie';
import { recepiesList } from '../../../dummyData/recepies';

let wrapper, changeSingleRecepieOptionHandlerMock;
beforeEach(() => {
  changeSingleRecepieOptionHandlerMock = jest.fn()
  wrapper = shallow(<Recepie recepie={recepiesList[0]} changeSingleRecepieOptionHandler={changeSingleRecepieOptionHandlerMock} />);
})

describe('<Recepie/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('run changeSingleRecepieOptionHandler fn when user choose a option', () => {
    wrapper.find('select').simulate('change');
    expect(changeSingleRecepieOptionHandlerMock).toHaveBeenCalled();
  })

  it('has a correct values from props', () => {
    expect(wrapper.find('h3').text()).toEqual(recepiesList[0].name)
    expect(wrapper.find('p').text()).toEqual(recepiesList[0].description)
  })
})