import React, { Component } from 'react';

class SearchComponent extends Component {
  render() {
    let nats = this.props.data.map(row => row.nat);
    let natCounts = {};
    nats.forEach(nat => {
      nat in natCounts ? natCounts[nat]++ : natCounts[nat] = 1;
    });
    let natsJsx = Object.keys(natCounts).map(nat => {
      return (
        <span key={`${nat} ${natCounts[nat]}`}>{nat}: {natCounts[nat]}</span>
      )
    })


    return (
      <div className="nationalityTab-component shadow">
        {natsJsx}
      </div>
    );
  }
}

export default SearchComponent;