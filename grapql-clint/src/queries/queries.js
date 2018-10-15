import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
const getAuthorsQurry = gql`
{
  authors{
    name, id 
  }
}
`



const getBook = gql`
{
  books{
    name, id 
  }
}
`
//with qurry varible 
const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authorId:ID!){
    addBook(name:$name,genre:$genre,authorId:$authorId){
        name,id
    }

}`

const getBookQurry=gql`
    query($id:ID){
        book(id:$id){
            id,
            name,
            genre,
            author{
                id,name,
                age,
                books{
                    name,id
                }
            }
        }
    }
`

export {
    getAuthorsQurry, getBook, addBookMutation
,getBookQurry
}