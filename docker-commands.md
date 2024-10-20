
# commands

## pull mongodb

```bash
docker pull mongo
```

## pull mongo express
```bash
docker pull mongo-express
```

## create docker network
```bash
docker network create mongo-network
```

## start mongodb
```bash
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--net mongo-network \
--name mongodb \
mongodb
```

## start mongo-express
```bash
docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--net mongo-network \
--name mongo-express \
mongo-express
```

* These commands are written in .yaml file in a more structured way and we also don't need to create a network
