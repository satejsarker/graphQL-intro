import React, { Component } from 'react'

import {graphql} from 'react-apollo';

import {getBook} from  '../queries/queries';

import BookDetails from '../components/bookDetails';

class BookList extends Component {
  
  
  constructor(props){
    super(props);
    this.state={
      selected:null
    }
  }


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
    <li 
    onClick={(e)=>{
      this.setState({
        selected: book.id
      })
    }}
    style={{
      cursor:'pointer'
    }}className="list-group-item" key={book.id}>
    {book.name}
  </li>
   )
  })
}
  }
  render() {
   
    return (
      <div className="row">
      
      <div className="card">
      <div className="card-header">
      Book List</div>
    <div className="card-body"> 
        <div className="list-group">
        <ul id="book_list" >
            
             {this.displayBook()}
            
        </ul>
        </div>
      </div>
  
      
        
      </div>


      <div className="col">
      <div className="card">
      <div className="card-header">Book Details</div>
      
      <BookDetails bookId={this.state.selected}/>
      </div>
      
      
      </div>
      </div>
      
    )
  }
}

export default graphql(getBook)(BookList);
