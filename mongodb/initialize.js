// connect
conn = new Mongo();

// like "use"
db = conn.getDB('main');

// users
db.createUser({
    user: 'zubair.patel',
    pwd: 'pis12345',
    roles: [{ role: "readWriteAnyDatabase", db: 'admin' }]
});

db.createUser({
    user: 'read.user',
    pwd: 'read.user',
    roles: [{ role: "read", db: 'main' }]
});

// creation log collection
db.createCollection("creation_log", {
    validator: {
        $jsonSchema: {
            required: ["datetimestamp"],
            properties: {
                datetimestamp: {
                    bsonType: "date",
                    description: "Datetimestamp value must be a date"
                },
            }
        }
    }
});

db.creation_log.insertOne({ datetimestamp: new Date() });

// dkron_jobs collection
db.createCollection("dkron_jobs", {
    validator: {
        $jsonSchema: {
            required: [
                "instance"
                // ,"datetimestamp", 
                // "id", 
                // "job_id"
            ],
            properties: {
                instance: {
                    bsonType: "string",
                    description: "Instance name must be a string"
                },
                // datetimestamp: {
                //     bsonType: "date",
                //     description: "Datetimestamp value must be a date"
                // },
                // job_id: {
                //     bsonType: "string",
                //     description: "ID must be a string"
                // },                
                // job: {
                //     bsonType: "object",
                //     description: "Job must be Json"
                // },                   
            }
        }
    }
});