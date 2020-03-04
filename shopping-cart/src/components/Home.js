import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../reducers/cartReducer";

class Home extends Component {
  handleClick(id) {
    this.props.addToCart(id);
  }

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.imgUrl} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <br />
            <button
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">My items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

const mapState = state => {
  return {
    items: state.items
  };
};

export default connect(mapState, mapDispatch)(Home);
