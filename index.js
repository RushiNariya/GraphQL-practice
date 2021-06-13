import express from 'express';
import resolvers from './resolvers';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
  res.send('server is runnig.');
});

const root = resolvers;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => console.log('running on 8082'));

// mutation{
//   createCourse(input: {
//     cousrname: "react graphql"
//     price: 199
//     stack: MOBILE
//     teacihngAssists: [{
//       firstName: "rushi"
//       lastName: "nariya"
//       experience: 1
//     },
//     {
//     	firstName: "raj"
//       lastName: "patel"
//       experience: 4
//     }]
//   }){
//     id,
//     cousrname
//   }
// }

// query{
//   getCourse(id: "6BTIOPHkyuWjvubvVRM1E"){
//     id,
//     teacihngAssists{
//       experience
//     }
//   }
// }
