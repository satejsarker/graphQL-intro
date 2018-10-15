import React, { Component } from 'react'

import { graphql, compose } from 'react-apollo';


import { getAuthorsQurry, addBookMutation ,getBook} from '../queries/queries';
class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            id: ''
        }
    }



    displayAuthor() {
        //cz give a props name on last 
        var data = this.props.getAuthorsQurry;
        if (data.loading) {
            return (<option>
                loading Author
            </option>);

        } else {
            return data.authors.map(author => {
                return <option key={author.id} value={author.id}>
                    {author.name}

                </option>
            })
        }
    }

    onSubmit = (e) => {
        const { name, genre, id } = this.state;
//with qurry varible 
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name:name,
                genre:genre,
                authorId:id
            },
            //refetching the query

            refetchQueries:[{
                query:getBook
            }]
           
        });
    }
    render() {
        return (
            <div aligin="center" className='card'>
                <div className="card-header">
                    Add New Book</div>
                <div className="card-body">


                    <form onSubmit={this.onSubmit}>
                        <div className="row">

                            <div className="col">

                                <div className="form-group">
                                    <label className="label label-default" htmlFor="bookName">
                                        Book Name</label>
                                    <input name='name ' onChange={(e) => this.setState({
                                        name: e.target.value
                                    })} className="form-control-sm" type="text" />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label className="label label-default" htmlFor="bookName">
                                        Genre  :</label>
                                    <input
                                        onChange={(e) => this.setState({
                                            genre: e.target.value
                                        })}
                                        name="genre" className="form-control-sm" type="text" />
                                </div>
                            </div>


                            <div className="col">
                                <div className="form-group">
                                    <label className="label label-default" htmlFor="author">
                                        Author:
                </label>
                                    <select className="form-control-sm" name="id" id=""
                                        onChange={(e) => this.setState({
                                            id: e.target.value
                                        })}
                                    >
                                        {this.displayAuthor()}

                                    </select>
                                </div>
                            </div>


                            <div className="col">
                                <div className='form-group'>

                                    <button className="btn btn-primary">
                                        +
                        </button>
                                </div>
                            </div>


                        </div>





                    </form>
                </div>


            </div>
        )
    }
}

export default compose(
    graphql(getAuthorsQurry, {
        name: 'getAuthorsQurry'
    }),
    graphql(addBookMutation, {
        name: 'addBookMutation'
    })
)(AddBook);
