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
        users: [
            {
                id: 0,
                name: "Lucas Böhm",
                imgsrc: "/img/avatars/avatar-lucas.png"
            },
            {
                id: 1,
                name: "Luca Feiser",
                imgsrc: "/img/avatars/avatar-luca.png"
            },
            {
                id: 2,
                name: "Gast",
                imgsrc: "/img/avatars/avatar-standard.png"
            }
        ],
        orders: [
            {
                orderid: 0,
                userid: 0,
                productid: 0
            },
            {
                orderid: 1,
                userid: 1,
                productid: 0
            },
            {
                orderid: 2,
                userid: 1,
                productid: 2
            },
            {
                orderid: 3,
                userid: 1,
                productid: 3
            },
            {
                orderid: 4,
                userid: 0,
                productid: 0
            },
            {
                orderid: 5,
                userid: 1,
                productid: 0
            },
            {
                orderid: 6,
                userid: 1,
                productid: 2
            },
            {
                orderid: 7,
                userid: 1,
                productid: 3
            }
        ]
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/api/products')
            .then(res => this.setState({ products: res.data }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                          <h3>Produkte</h3>
                          <div className="row productRow">
                            <ProductListing products={this.state.products}/>
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
                                <UserListing users={this.state.users}/>
                            </div>
                        </>
                    )} />
                </div>
            </Router>
        );
    }
}

export default App;
