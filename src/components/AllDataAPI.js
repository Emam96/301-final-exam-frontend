import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CardApi from './apiCard';


class AllDataAPI extends Component {
constructor() {
super(); 
this.state ={
data: [],

}; 

}


componentDidMount = async () => {
  
let allData = await axios.get(`${process.env.REACT_APP_SERVER}/getData`)
// console.log(allData.data);
this.setState({

    data:  allData.data,
})
    
}


addToFavorite = async (item) => {
    const { user, isAuthenticated } = this.props.auth0;

    await axios.post(`${process.env.REACT_APP_SERVER}/addfav?email=${user.email}`, item)


}



    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                 {this.state.data.map(item => {
return(<CardApi 
title = {item.title}
image= {item.imageUrl}
item={item}
addfav = {this.addToFavorite}
/>)


                 })}        

            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
