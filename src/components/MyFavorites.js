import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "././MyFavorites.js";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import CardFav from "./favCard.js";
import ModalU from "./modal.js";
class MyFavorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favData: [],
      show: false,
      selected: {},
    };
  }

  componentDidMount = async () => {
    const { user, isAuthenticated } = this.props.auth0;

    let allData = await axios.get(
      `${process.env.REACT_APP_SERVER}/getfav?email=${user.email}`
    );
    console.log(allData.data);
    this.setState({
      favData: allData.data,
    });
  };

  deleteFromFavorite = async (id) => {
    const { user, isAuthenticated } = this.props.auth0;

    let allData = await axios.delete(
      `${process.env.REACT_APP_SERVER}/delete/${id}?email=${user.email}`
    );
    console.log(allData.data);
    this.setState({
      favData: allData.data,
    });
  };


  showModal = async (selected) => {

await this.setState({

show: true,
selected: selected,

})

  }

updateButton = async (selected) => {

  let allData = await axios.put(
    `${process.env.REACT_APP_SERVER}/update/${selected.id}`, selected
  );
  console.log(allData.data);
  this.setState({
    favData: allData.data,
  });



}

handleClose = () => {

  this.setState({
  
  show: false,
      
  })
  
  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>This is a collection of my favorites</p>

        {this.state.favData.map((item) => {
          return (
            <CardFav
              title={item.title}
              image={item.imageUrl}
              item={item}
              delete={this.deleteFromFavorite}
              showModal={this.showModal}
              // update = {this.}
            />
          );
        })}


<ModalU 
update={this.updateButton}
show={this.state.show}
selected={this.state.selected}
close={this.handleClose}
/>

      </>
    );
  }
}

export default withAuth0(MyFavorites);
