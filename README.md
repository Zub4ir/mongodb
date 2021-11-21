# MondoDB

This is a single instance of MongoDB using Docker. The Docker-Compose project is based off the official Docker image docs https://hub.docker.com/_/mongo. I prefer creating docker-compose project to accomodate additional project containers.

## To Run

If deployed locally, access on `localhost` via deafualt port 27017 user "root" with password "pis12345" using a MondoDB client such as [MongoDB Compass](https://www.mongodb.com/products/compass).

```bash
# Navigate to root folder and run
docker-compose up --build -d
```

## The Setup