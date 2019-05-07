import React, { Component } from 'react';
import TableComponent from './table';
import NationalityTabComponent from './nationalityTab';

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {searchInput: '', data: []};
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount()
    {
        fetch(`http://localhost:8080/players`)
            .then(blob => blob.json())
            .then(res => {
                this.data = res;
                this.setState({data: res})}
            );
    }   

    handleSearchChange(e) {
        this.setState({searchInput: e.target.value});
    }
    
    render() {
        return (
        <div >
            <input type="text" placeholder="Search..."
            onChange={this.handleSearchChange}/>
            <NationalityTabComponent data={this.state.data} searchInput={this.state.searchInput}/>
            <TableComponent data={this.state.data} searchInput={this.state.searchInput}/>
        </div>
        );
    }
}

export default SearchComponent;