import React, { createContext, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Routing';
import { reducer, initialState } from './reducers/userReducer';

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
