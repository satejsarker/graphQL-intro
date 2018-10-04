const graphql =require ('graphql');
const _ =require ('lodash');
//dummy data 
var books=[
    {name:'Now i am with you',genre:'Romance',id:'1'},
    {name:'Now you see me ',genre:'Fantasy',id:'2'},
    {name:'Basic',genre:'Criame',id:'3'},
]; 

var authors=[
    {name:'satej',age:27,id:'1'},
    {name:'gunjan',age:39,id:'2'},
    {name:'samir',age:55,id:'3'},
];
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,
    GraphQLInt
}=graphql;
const BookType=new GraphQLObjectType({
    name:'book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
});
const AuthorType=new GraphQLObjectType({
    name:'author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}
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
        }
    }
});




//export the Qurry to the server 

module.exports=new GraphQLSchema({
    query:RoootQury
});