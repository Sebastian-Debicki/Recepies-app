import { sort } from '../../helpers/sort';
import { recepiesList } from '../dummyData/recepies';


describe('sort function', () => {
  it('sort recepiesList correctly by default', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Last modification date', 'Increasing');
    expect(sortedRecepiesList).toEqual([recepiesList[2], recepiesList[0], recepiesList[1]])
  })

  it('sort recepiesList correctly by Last modification date - Decreasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Last modification date', 'Decreasing');
    expect(sortedRecepiesList).toEqual([recepiesList[1], recepiesList[0], recepiesList[2]])
  })

  it('sort recepiesList correctly by name - Increasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Name', 'Increasing');
    expect(sortedRecepiesList).toEqual([recepiesList[1], recepiesList[0], recepiesList[2]])
  })

  it('sort recepiesList correctly by name - Decreasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Name', 'Decreasing');
    expect(sortedRecepiesList).toEqual([recepiesList[2], recepiesList[0], recepiesList[1]])
  })

  it('sort recepiesList correctly by Added date - Increasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Added date', 'Increasing');
    expect(sortedRecepiesList).toEqual([recepiesList[2], recepiesList[0], recepiesList[1]])
  })

  it('sort recepiesList correctly by Added date - Decreasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Added date', 'Decreasing');
    expect(sortedRecepiesList).toEqual([recepiesList[1], recepiesList[0], recepiesList[2]])
  })

  it('sort recepiesList correctly by Calories - Increasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Calories', 'Increasing');
    expect(sortedRecepiesList).toEqual([recepiesList[0], recepiesList[2], recepiesList[1]])
  })

  it('sort recepiesList correctly by Calories - Decreasing', () => {
    const sortedRecepiesList = [...recepiesList]
    sort(sortedRecepiesList, 'Calories', 'Decreasing');
    expect(sortedRecepiesList).toEqual([recepiesList[1], recepiesList[2], recepiesList[0]])
  })
})