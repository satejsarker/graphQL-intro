import React, { Component } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
const getAuthorsQurry = gql`
{
  authors{
    name, id 
  }
}
`
class AddBook extends Component {
    displayAuthor(){
        var data=this.props.data;
        if(data.loading){
            return(<option>
            loading Author
            </option>);
            
        }else{
            return data.authors.map(author=>{
                return <option key={author.id} value={author.id}>
{author.name}

                </option> 
            })
        }
    }
    render() {
        return (
            <div>
                <form >
                    <div className="form-control">
                        <label className="label label-default" htmlFor="bookName">
                            Book Name</label>
                        <input type="text" />
                    </div>
                    <div className="from-control">
                        <label className="label label-default" htmlFor="author">
                            Author:
                </label>
                        <select className="from-control" name="" id="">
                            {this.displayAuthor()}

                        </select> 
                    </div>
                    <div className="form-control">
        <button className="btn btn-primary">
                        +
                        </button>
                    </div>
                   
                </form>

            </div>
        )
    }
}

export default graphql(getAuthorsQurry)(AddBook);
