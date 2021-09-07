import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap/'


class CardFav extends Component {




    render() {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    
    <Button variant="danger" onClick={()=> {this.props.delete(this.props.item._id)}}>Delete</Button>
    <Button variant="primary" onClick={()=> {this.props.showModal(this.props.item)}}>Update</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default CardFav;