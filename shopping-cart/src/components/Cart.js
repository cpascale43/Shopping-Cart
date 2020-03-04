import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div key={item.id}>
            <div className="item-img">
              <img src={item.imgUrl} alt={item.imgUrl} />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: ${item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <p>Nothing.</p>
    );

    return (
      <div className="container">
        <div className="cart">
          <h5>You have chosen:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};

export default connect(mapStateToProps)(Cart);
