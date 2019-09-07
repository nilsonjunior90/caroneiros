import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

this.state = {
    token: '',
    email: ''
  };

const AppContext = React.createContext(
{
    token: this.state.token,
    email: this.state.email
});

export default AppContext;