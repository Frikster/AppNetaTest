import React, { Component } from 'react';
import TableComponent from './table';
import NationalityTabComponent from './nationalityTab';

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {searchInput: ''};

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount()
    {
        fetch(`http://localhost:8080/players`)
            .then(blob => blob.json())
            .then(res => console.log(res));
    }   

    handleSearchChange(e) {
        this.setState({searchInput: e.target.value})
    }
    
    render() {
        return (
        <div >
            <input type="text" placeholder="Search..."
            onChange={this.handleSearchChange}/>
            <NationalityTabComponent/>
            <TableComponent/>
        </div>
        );
    }
}

export default SearchComponent;