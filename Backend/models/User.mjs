import db from '../db.js';

db.createCollection("users", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["username", "password", "email"],
          uniqueItems: ["email"],
          properties: {
             username: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             password: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             email: {
                bsonType: "string",
                pattern: "^.+@.+\..+$",
                description: "must be a string and match the email pattern"
             }
          }
       }
    }
})

