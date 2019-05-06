import React, { Component } from 'react';
import ReactTable from "react-table";

class TableComponent extends Component {

/*     constructor(props) {
        super(props)
        this.state = {data: this.props.data}
        
    } */

    render() {
        

        //let data = this.props.data ? this.props.data : [];

        let data = [{num: 1, name: 'b'},{num: 2, name: 'q'},{num: 3, name: 'a'}];
        console.log(data)
        return (
        <div >
            <ReactTable
                data={data}
                noDataText="No data"
                columns={[{Header: "Number", accessor: "num"},
                          {Header: "Name", accessor: "name"}]}
//                className="-striped -highlight"
                          /*              
   columns={[{Header: "Number", accessor: "num"},
                {Header: "Name", accessor: "name"},
                {Header: "Position", accessor: "pos"},
                {Header: "Nationality", accessor: "nat"},
                {Header: "Height", accessor: "height"},
                {Header: "Weight", accessor: "weight"},
                {Header: "Date of Birth", accessor: "dob"},
                {Header: "Birthplace", accessor: "birthplace"}]} */
            />   
        </div>
        );
    }
}

export default TableComponent;