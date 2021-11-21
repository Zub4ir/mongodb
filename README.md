# MondoDB

This is a single instance of MongoDB using Docker. The Docker-Compose project is based off the official Docker image docs https://hub.docker.com/_/mongo. I prefer creating a docker-compose project to accomodate additional project containers.

## To Run

If deployed locally, access on `localhost` via deafualt port 27017 user "root" with password "pis12345" using a MondoDB client such as [MongoDB Compass](https://www.mongodb.com/products/compass).

```bash
# Navigate to root folder and run
docker-compose up --build -d
```

## Project Setup Notes

The project is created with a default `main` database. The `initialize.js` script illustrates adding some data on startup, creating users and validation schemas. I was going to use this database as a backup/logger of dKron jobs so the validation schema is incomplete.

Additional notes in the notes.txt

_***Please comment out the mongo-express container_