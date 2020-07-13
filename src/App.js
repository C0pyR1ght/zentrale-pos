import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProductListing from './components/ProductListing';
import UserListing from "./components/UserListing";
import LastOrders from "./components/LastOrders";
import axios from 'axios';

class App extends Component {

    state = {
        products: [],
        users: [],
        orders: [],
        selectedProductIdForOrdering: null
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/api/products')
            .then(res => this.setState({ products: res.data }))
        axios
            .get('http://localhost:8000/api/users')
            .then(res => this.setState({ users: res.data }));
        axios
            .get('http://localhost:8000/api/order/all')
            .then(res => this.setState({ orders: res.data }));
    }

    createNewOrder = order => {
      console.log("creating new order");
      console.log(order);
      axios
        .post('http://localhost:8000/api/order/create', order)
        .then(res => {
          this.setState({ orders: [...this.state.orders, res.data] })
        })
    }

    setSelectedProductIdForOrdering = productId => {
      this.setState({ selectedProductIdForOrdering: productId });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                          <h3>Produkte</h3>
                          <div className="row productRow">
                            <ProductListing createOrder={this.setSelectedProductIdForOrdering} products={this.state.products}/>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <h3 style={{marginTop: "20px"}}>Letzte Bestellungen</h3>
                                  <ul className="list-group">
                                    <LastOrders orders={this.state.orders} products={this.state.products} users={this.state.users}/>
                                  </ul>
                              </div>
                              <div className="col-md-6">
                                  <h3 style={{marginTop: "20px"}}>Beliebteste</h3>
                                  <div className="stats">
                                      <p style={{ width: "100%", textAlign: "center", paddingTop: "50px", color: "#abafb8"}}>aktuell sind keine Daten verfügbar</p>
                                  </div>
                              </div>
                          </div>
                      </React.Fragment>

                    )} />
                    <Route path="/users" render={props => (
                        <>
                            <h3>Verrechnungskonto auswählen</h3>
                            <div className="row" >
                                <UserListing selectedProductIdForOrdering={this.selectedProductIdForOrdering} createOrder={this.createNewOrder} users={this.state.users}/>
                            </div>
                        </>
                    )} />
                </div>
            </Router>
        );
    }
}

export default App;
