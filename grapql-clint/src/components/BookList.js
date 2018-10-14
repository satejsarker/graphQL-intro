import React, { Component } from 'react'
import  {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBook=gql`
{
  books{
    name, id 
  }
}
`

class BookList extends Component {
  displayBook=()=>{
const data=this.props.data;
if(data.loading){
return (
  <div>
    Loading Books...
  </div>
)
}

else{
  return data.books.map(book=>{
   return (
    <li key={book.id}>
    {book.name}
  </li>
   )
  })
}
  }
  render() {
   
    return (
      <div>
        <ul id="book_list">
            <li>
             {this.displayBook()}
            </li>
        </ul>
      </div>
    )
  }
}

export default graphql(getBook)(BookList);
