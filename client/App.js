import React, { useReducer } from "react";

import {State, Dispatch} from './Context';

import {Home} from './Home';

// State Reducer
const initialState = {pays: []};

function reducer(state, action) {
  switch (action.type) {
    case 'pays':
      return {pays: action.content};
    // case 'increment':
    //   return {count: state.count + 1};
    // case 'decrement':
    //   return {count: state.count - 1};
    default:
      throw new Error();
  }
}

// Main App
function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Dispatch.Provider value={dispatch}>
		<State.Provider value={state}>
			<Home></Home>
		</State.Provider>
		</Dispatch.Provider>
	);
};

export default App;