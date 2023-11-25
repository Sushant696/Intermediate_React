import { useReducer } from "react";

const initialState = "Cart is Empty";

const reducer = (state, action) => {
  switch (action.type) {
    case "add to cart":
      return (state = "Item successfully Added");
    case "remove from cart":
      return (state = "Item removed");
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Context() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button
      className="px-6 py-3 m-3 rounded-[8px]"
        onClick={() => {
          dispatch({type :"add to cart"});
        }}
      >
        Add to cart
      </button>
      <button
      className="px-6 py-3 m-3 rounded-[8px]" 
        onClick={() => {
          dispatch({type:"remove from cart"});
        }}
      >
        Remove from cart
      </button>
      <button
      className="px-6 py-3 m-3 rounded-[8px]" 
        onClick={() => {
          dispatch({type:"reset"});
        }}
      >
        Reset Cart
      </button>
    </div>
  );
}

export default Context;
