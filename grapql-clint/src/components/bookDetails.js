import React, { Component } from 'react'
import {graphql} from 'react-apollo';
import {getBookQurry} from '../queries/queries'
 class BookDetails extends Component {
  displayBookDetails(){
    const {book}=this.props.data;
    if(book){
      return(
        <div className="card-header">
          <p className="text-capitalize text-primary text-center">
            Title:{book.name}
          </p>
          <p className="text-center text-small">
            Genre:{book.genre}
          </p>
          <p className="text-info">
            Author:{book.author.name}
          </p>
          <p>
            All the book By {book.author.name}
            <div className="list-group">
            <ul className="other-book "> 
                {book.author.books.map(item=>{
                  return<li  className="list-group-item" key={item.id}>{
                    item.name
                  }</li>
                })}
            </ul>
            </div>
       
          </p>
        </div>
      )
      
    }else{
      return (
        <p className="text-danger">
        No Selected Book</p>
      )
    }
  }

  render() {
  
    console.log(this.props);
    return (
      <div>
       {this.displayBookDetails()}
    
      </div>
    )
  }
}

export default graphql(getBookQurry,{ 
  options:(props)=>{
    return{
      variables:{
        id:props.bookId
      }
    }
  }

})(BookDetails);