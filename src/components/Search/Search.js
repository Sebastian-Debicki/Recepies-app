import React from 'react';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

const Search = ({ searchInputHandler, searchValue, changeSelectValueSortBy, changeSelectValueIncOrDec }) => {
  return (
    <div className="recepies-list__search">
      <Input
        class="input u-margin-bottom-small"
        type="text"
        name="Search by name"
        changed={searchInputHandler}
        value={searchValue}
      />
      <Select
        changed={changeSelectValueSortBy}
        options={['Last modification date', 'Added date', 'Name', 'Calories']}
        id={'Sort By'}
        class="select-box--sortBy"
      />
      <Select
        changed={changeSelectValueIncOrDec}
        options={['Increasing', 'Decreasing']}
        id={'Increasing'}
        class="select-box--incDec"
      />
    </div>
  );
}

export default Search;