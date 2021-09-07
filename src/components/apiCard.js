
import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap/'


class CardApi extends Component {




    render() {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    
    <Button variant="primary" onClick={()=> {this.props.addfav(this.props.item)}}>Add to Favorite</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default CardApi;