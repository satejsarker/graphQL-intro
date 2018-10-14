const express =require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

//Mongo db connection with new protocal
mongoose.connect('mongodb://satej:satej11@ds147974.mlab.com:47974/event', { useNewUrlParser: true });
mongoose.connection.once('open',()=>{
    console.log('connnect to MongoDB')
})

app.use(cors());
app.use('/graphql',graphqlHTTP({
        schema,
        graphiql:true
}));



app.listen(4000,()=>{
    console.log('working on 40000')
}) 