//connect to mongodb in nodejs
//CRUD CREATE READ UPDATE DELETE

const mongodb = require('mongodb-legacy');
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectId } = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    console.log('Connected Successfully welcome');
    const db = client.db(databaseName);

    // Inserting data  CREATE (C)
    // db.collection('users').insertOne({
    //   name: 'Anthony',
    //   age: 30,
    // });
    // db.collection('users').insertMany([
    //   { _id: id, name: 'margaux', age: 30 },
    //   { _id: id, name: 'justine', age: 26 },
    //   { _id: id, name: 'baptiste', age: 23 },
    // ]);
    // db.collection('tasks').insertMany([
    //   {
    //     description: 'exercise',
    //     completed: false,
    //   },
    //   {
    //     description: 'eat',
    //     completed: true,
    //   },
    //   {
    //     description: 'work application',
    //     completed: false,
    //   },
    // ]);

    // SEARCHING AND QUERRYING DATA    READ (R)
    // db.collection('tasks').findOne(
    //   {
    //     _id: new ObjectId('635a6d1960f6f4a30142b5d8'),
    //   },
    //   (error, tasks) => {
    //     console.log(tasks);
    //   }
    // );

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });
    // db.collection('tasks')
    //   .find({ completed: false })
    //   .count((error, count) => {
    //     console.log(count);
    //   });
    // db.collection('users').findOne({ name: 'Anthony' }, (error, result) => {
    //   if (error) {
    //     return console.log(`There was an error ${error}`);
    //   }
    //   console.log(result);
    // });

    // UPDATING DATA (U)
    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectId('635a470078370da4058e1302'),
    //     },
    //     {
    //       $set: {
    //         age: 31,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => console.log(error));

    // db.collection('tasks')
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => console.log(error));

    // DELETE (D)
    // db.collection('users')
    //   .deleteMany({
    //     name: 'Anthony',
    //     age: 30,
    //   })
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error));

    db.collection('users')
      .deleteOne({
        name: 'baptiste',
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
);
