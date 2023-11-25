import { useReducer } from "react";
const initialState = {
  newCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
      newCount : state.newCount + action.value
      }
    case "decrement":
      return {
        newCount : state.newCount - action.value
      }
    case "reset":
      return initialState
    default:
      return state;
  }
};

// my component
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState); // count is a current state we defined

  return (
    <div>
      <h2>Count: {count.newCount}</h2>
      <button
        style={{ padding: ".5rem", margin: ".5rem", borderRadius: "8px" }}
        onClick={() => dispatch({ type: "increment" , value :1 })}
      >
        Increment{" "}
      </button>
      <button
        style={{ padding: ".5rem", margin: ".5rem", borderRadius: "8px" }}
        onClick={() => dispatch({ type: "decrement" ,value :1 })}
      >
        Decrement{" "}
      </button>
      <button
        style={{ padding: ".5rem", margin: ".5rem", borderRadius: "8px" }}
        onClick={() => dispatch({ type: "increment" ,value :5 })}
      >
        Increment 5{" "}
      </button>
      <button
        style={{ padding: ".5rem", margin: ".5rem", borderRadius: "8px" }}
        onClick={() => dispatch({ type: "decrement" ,value :5 })}
      >
        Decrement 5 {" "}
      </button>
      <button
        style={{ padding: ".5rem", margin: ".5rem", borderRadius: "8px" }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter2 ;

// why did we use type in here ??
