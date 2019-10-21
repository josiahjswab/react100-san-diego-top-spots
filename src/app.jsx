import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
        axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div id="container" className='container-fluid'>
        <div class="well">
          <h1><strong>San Diego Top Spots</strong></h1>
          <p>A list of the top 30 places in San Diego, California.</p>
        </div>
          { this.state.topspots.map(topspot => (
            <TopSpot key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
          ))
          }
      </div>
    );
  }
}

export default App;
