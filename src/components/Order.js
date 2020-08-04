import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import { store } from 'react-notifications-component';

class Order extends Component {

  deleteOrderConfirmModal = () => {
    confirmAlert({
      title: 'Bestellung löschen',
      message: 'Soll die Bestellung von ' + this.props.user.name + ' wirklich gelöscht werden?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.props.deleteOrder(this.props.order.pos_order_id),
        },
        {
          label: 'Abrrechen',
        }
      ]
    });
  };

    render() {
      const { name, imgsrc } = this.props.product;
      return (
          <>
              <li className="list-group-item">
                  <div className="row">
                      <span className="col-md-4"><b>{ this.props.user.name }</b></span>
                      <span className="col-md-4" style={{color: "#abafb8"}}>{ this.props.product.name }</span>
                      <span className="col-md-2" style={{color: "#abafb8"}}>{this.props.product.price }</span>
                      <span className="col-md-2">
                        <button className="btn" style={{float: "right"}} onClick={this.deleteOrderConfirmModal}>
                          <i className="fas fa-minus-circle" style={{color: "#e74c3c"}}></i>
                        </button>
                      </span>
                  </div>
              </li>
          </>
      );
    }
}

Order.propTypes = {
    deleteOrder: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

export default Order;
