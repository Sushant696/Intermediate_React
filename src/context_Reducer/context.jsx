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
      style={{padding:".5rem" , margin:'.5rem', borderRadius:'8px'}} 
        onClick={() => {
          dispatch("add to cart");
        }}
      >
        Add to cart
      </button>
      <button
      style={{padding:".5rem" , margin:'.5rem', borderRadius:'8px'}} 
        onClick={() => {
          dispatch("remove from cart");
        }}
      >
        Remove from cart
      </button>
      <button
      style={{padding:".5rem" , margin:'.5rem', borderRadius:'8px'}} 
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset cart
      </button>
    </div>
  );
}

export default Context;
