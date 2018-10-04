const graphql =require ('graphql');
const _ =require ('lodash');
//dummy data 
var books=[
    {name:'Now i am with you',genre:'Romance',id:'1',authorId:'1'},
    {name:'Now you see me ',genre:'Fantasy',id:'2',authorId:'2'},
    {name:'Basic',genre:'Criame',id:'3',authorId:'3'},

{    name:'now you see me ',genre:'Fantasy',id:'4',authorId:'2'},
{    name:'hero of our socity ',genre:'social  ',id:'5',authorId:'2'}
]; 

var authors=[
    {name:'satej',age:27,id:'1'},
    {name:'gunjan',age:39,id:'2'},
    {name:'samir',age:55,id:'3'},
];
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,
    GraphQLInt,GraphQLList
}=graphql;
const BookType=new GraphQLObjectType({
    name:'book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        //nested data qurry 
        author:{
            type:AuthorType,
            resolve(parent,args){
                //cz only one author for perticular book 
                    console.log(parent);
                    return _.find(authors,{id:parent.authorId})
            }        
        }
    })
});
const AuthorType=new GraphQLObjectType({
    name:'author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                //one author can have multiple book 
                    return _.filter(books,{authorId:parent.id})
            }
        }
    })
});
// graphQl schema desgin 


const RoootQury=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){

                
                //code to get data from db/other surce  
                //like  args:id
                  return  _.find(books,{id:args.id});

            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
            }
        },
        //for all books
        books:{
            type:new  GraphQLList(BookType),
            resolve(parent,args){
                return books;
            }
        },
        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                return authors;
            }
        }
    }
});




//export the Qurry to the server 

module.exports=new GraphQLSchema({
    query:RoootQury
});