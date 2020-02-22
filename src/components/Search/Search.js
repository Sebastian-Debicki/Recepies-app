import React from 'react';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

const Search = (props) => {
  return (
    <div className="recepies-list__search">
      <Input
        class="input u-margin-bottom-small"
        type="text"
        name="Search by name"
        changed={props.searchInputHandler}
        value={props.searchValue}
      />
      <Select
        changed={props.changeSelectValueSortBy}
        options={['Last modification date', 'Added date', 'Name', 'Calories']}
        id={'Sort By'}
        class="select-box--sortBy"
      />
      <Select
        changed={props.changeSelectValueIncreasing}
        options={['Increasing', 'Decreasing']}
        id={'Increasing'}
        class="select-box--incDec"
      />
    </div>
  );
}

export default Search;