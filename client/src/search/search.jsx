import React, { Component } from 'react';
import TableComponent from './table';
import NationalityTabComponent from './nationalityTab';
import moment from "moment";

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {searchInput: '', data: []};
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.dataFiltered = this.dataFiltered.bind(this);
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
        this.setState({searchInput: e.target.value.toLowerCase()});
    }

    dataFiltered() {
        let data = this.state.data;        
        data.map(row => {
            // Dates on backend are at midnight but off by one day on frontend
            // Likely in Javascript midnight is considered part of the day ending rather than the day starting
            // i.e. add one day on frontend
            let dob_moment = moment(new Date(row.dob)).add(1, 'days');
            row.dob = dob_moment.format("YYYY-MM-DD");
            return row;
        });
        if(this.state.searchInput) {
            let searchInput = this.state.searchInput;
            data = this.state.data.filter(row => {
                let rowKeys = Object.keys(row);
                for(let i = 0; i < rowKeys.length; i++) {
                    let colName = rowKeys[i];
                    if(row[colName].toString().toLowerCase().includes(searchInput)) {
                        return true;
                    }
                }
                return false;
            });
        }
        return data;
    }
    
    render() {        
        return (
        <div className="search-component">
            <div className="search-bar-div">
                <span className="fa fa-search"></span>
                <input type="text" placeholder="Search..."
                onChange={this.handleSearchChange}/>
            </div>
            <NationalityTabComponent data={this.dataFiltered()}/>
            <TableComponent data={this.dataFiltered()}/>
        </div>
        );
    }
}

export default SearchComponent;