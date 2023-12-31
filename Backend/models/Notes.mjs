import db from '../db.mjs';

db.createCollection("Notes", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["title", "content", "userId"],
          properties: {
             title: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             content: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             userId: {
                bsonType: "objectId",
                description: "must be an objectId and is required"
             }
          }
       }
    }
})