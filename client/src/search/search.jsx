import React, { Component } from 'react';
import TableComponent from './table';
import NationalityTabComponent from './nationalityTab';

class SearchComponent extends Component {
  render() {
    return (
      <div >
        <input type="text" placeholder="Search..."/>
        <NationalityTabComponent/>
        <TableComponent/>
      </div>
    );
  }
}

export default SearchComponent;