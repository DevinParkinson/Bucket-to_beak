import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Bucket To Beak Curbside Composting</Header>
        <Header>Main Page w/ Bullets</Header>
        <ul>Local</ul>
        <ul>Responsive</ul>
        <ul>Regenerative</ul>
        <p>Mainly for building top soil. Makes them more enviromentally friendly. improve local food quality. reduce carbon footprint.</p>
        <p>About page. Will receive what the about things are later.</p>
        <p>Three step process on main page. Accordian style showing steps to complete process. Simple easy layout. FAQ at bottom. Main Logo is home link.</p>
        <p>Contact Us</p>
        <p>See if you are in the coverage area in contact page.</p>
      </Container>
    );
  }
}

export default Home;