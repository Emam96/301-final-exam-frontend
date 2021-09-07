import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap/'


class ModalU extends Component {

update = (e)=> {
    e.preventDefault();

let selected = {

title: e.target.title.value, 





}
this.props.update(selected);



}




    render() {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <Modal show={this.props.show} onHide={this.props.close} >
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit={this.update}>
            
            <input type="text" name="title" defaultValue={this.props.selected.title}></input>
            <input type="submit"></input>
            </form></Modal.Body>
        
      </Modal>
            </div>
        )
    }
}

export default ModalU;