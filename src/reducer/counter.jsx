import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {

  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// my component
function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState); // count is a current state we defined

  return (
    <div>
        <h2>Count: {count}</h2>
      <button style={{padding:".5rem" , margin:'.5rem', borderRadius:'8px'}} onClick={()=>dispatch('increment')}>Increment </button>
      <button style={{padding:".5rem" , margin:'.5rem', borderRadius:'8px'}} onClick={()=>dispatch('decrement')}>Decrement </button>
      <button style={{padding:".5rem" , margin:'.5rem', borderRadius:'8px'}} onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  );
}

export default Counter;
