import db from '../db.mjs';

db.createCollection("Users", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["username", "email"],
          properties: {
             username: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             password: {
                bsonType: "string",
                description: "must be a string and is required"
             }
          }
       }
    }
})

const usersCollection = db.collection('Users');
usersCollection.createIndex({ email: 1 }, { unique: true }, {required: true});
