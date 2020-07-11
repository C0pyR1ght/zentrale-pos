import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProductListing from './components/ProductListing';
import UserListing from "./components/UserListing";
import LastOrders from "./components/LastOrders";


class App extends Component {

    state = {
        products: [
            {
                id: 0,
                name: "Fritz-Getränke",
                price: "1,50 €",
                imgsrc: "/img/fritz-getraenke.jpg"
            },
            {
                id: 1,
                name: "Trade-Islands Iced Tea",
                price: "2,00 €",
                imgsrc: "/img/trade-islands.jpg"
            },
            {
                id: 2,
                name: "Bier 0,33l",
                price: "1,00 €",
                imgsrc: "/img/bier-klein.jpg"
            },
            {
                id: 3,
                name: "Bier 0,5l",
                price: "2,00 €",
                imgsrc: "/img/bier-gross.jpg"
            }
        ],
        users: [
            {
                id: 0,
                name: "Lucas Böhm",
                imgsrc: "/logo512.png"
            },
            {
                id: 1,
                name: "Luca Feiser",
                imgsrc: "/logo512.png"
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
                          <h3 style={{marginTop: "20px"}}>Letzte Bestellungen</h3>
                          <div className="row">
                              <div className="col-md-6">
                                  <ul className="list-group">
                                    <LastOrders orders={this.state.orders} products={this.state.products} users={this.state.users}/>
                                  </ul>
                              </div>
                              <div className="col-md-6"></div>
                          </div>
                      </React.Fragment>

                    )} />
                    <Route path="/users" render={props => (
                        <div className="row" >
                            <UserListing users={this.state.users}/>
                        </div>
                    )} />
                </div>
            </Router>
        );
    }
}

export default App;
