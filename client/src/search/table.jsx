import React, { Component } from 'react';
import ReactTable from "react-table";

class TableComponent extends Component {

/*     constructor(props) {
        super(props)
        this.state = {data: this.props.data}       
    } */

    render() {
        // let data = this.props.data;        
        // data.map(row => {
        //     // Dates on backend are at midnight but off by one day on frontend
        //     // Likely in Javascript midnight is considered part of the day ending rather than the day starting
        //     // i.e. add one day on frontend
        //     let dob_moment = moment(new Date(row.dob)).add(1, 'days');
        //     row.dob = dob_moment.format("YYYY-MM-DD");
        //     return row;
        // });
        // if(this.props.searchInput) {
        //     let searchInput = this.props.searchInput.toLowerCase();
        //     data = this.props.data.filter(row => {
        //         let rowKeys = Object.keys(row);
        //         for(let i = 0; i < rowKeys.length; i++) {
        //             let colName = rowKeys[i];
        //             if(row[colName].toString().toLowerCase().includes(searchInput)) {
        //                 return true;
        //             }
        //         }
        //         return false;
        //     });
        // }

        return (
        <div >
            <ReactTable
                data={this.props.data}
                noDataText="No data"                                       
                columns={[{Header: "Number", accessor: "id"},
                    {Header: "Name", accessor: "name"},
                    {Header: "Position", accessor: "pos"},
                    {Header: "Nationality", accessor: "nat"},
                    {Header: "Height", accessor: "height"},
                    {Header: "Weight", accessor: "weight"},
                    {Header: "Date of Birth", accessor: "dob"},
                    {Header: "Birthplace", accessor: "birthplace"}]} 
                className="-striped -highlight"
            />   
        </div>
        );
    }
}

export default TableComponent;