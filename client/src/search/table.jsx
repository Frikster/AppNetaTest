import React, { Component } from 'react';
import ReactTable from "react-table";
import moment from "moment";

class TableComponent extends Component {

/*     constructor(props) {
        super(props)
        this.state = {data: this.props.data}
        
    } */

    render() {
        let data = [];
        if(Object.keys(this.props.data).length !== 0) {
            data = this.props.data;
        }
        
        data.map(row => {
            let dob_moment = moment(new Date(row.dob));
            row.dob = dob_moment.format("YYYY-MM-DD");
            return row;
        });

        return (
        <div >
            <ReactTable
                data={data}
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