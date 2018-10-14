import React, { Component } from 'react';
// import logo from './logo.svg';

import ApolloClient from "apollo-boost";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import AddBook from './components/addBook'
import {ApolloProvider} from 'react-apollo';

const client= new ApolloClient({
  uri:"http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App" id="main">
       <h2>React with Graphql</h2>
       <BookList/>
  <AddBook/>
      </div>
    
      </ApolloProvider>
    );
  }
}

export default App;
