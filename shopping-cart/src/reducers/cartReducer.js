import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";
import item4 from "../images/item4.jpg";
import item5 from "../images/item5.jpg";
import item6 from "../images/item6.jpg";

// action types
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const ADD_QUANTITY = "ADD_QUANTITY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// action creators
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      imgUrl: item1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      imgUrl: item2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      imgUrl: item3
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      imgUrl: item4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      imgUrl: item5
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      imgUrl: item6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  try {
    switch (action.type) {
      case GET_CART:
        return action.cart;
      case ADD_TO_CART:
        // find the item that matches the action id
        let addedItem = state.items.find(item => item.id === action.id);
        // check if the action id exists in addedItems array
        let existed = state.addedItems.find(item => item.id === action.id);
        if (existed) {
          addedItem.quantity += 1;
          return {
            ...state,
            total: state.total + addedItem.price
          };
        } else {
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price;
          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
          };
        }
        case REMOVE_FROM_CART:
          let newItems = state.addedItems.filter(item => item.id !== action.id);
          let removed = state.addedItems.find(item => item.id === action.id)
          let newTotal = state.total - removed.price
          return {
            ...state,
            addedItems: newItems,
            total: newTotal
          }
      default:
        return state;
    }
  } catch (error) {
    console.error(error);
  }
};

export default cartReducer;
