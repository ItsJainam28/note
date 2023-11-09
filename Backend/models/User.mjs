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


