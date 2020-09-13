# Lands of Cinder Server

This is the server component of [Lands of Cinder](https://github.com/boonto/landsofcinder).

It runs with MongoDB on a Node + Express based backend with some frontend components in Pug.
The main goal was to act as a REST client for calls from the game, however it is pretty basic.

As this was developed early 2016, before publishing all the deprecated dependencies were replaced and the other versions updated.
Everything seems to still run as before.

### How to start?
1. Start a Mongo database on port 27077 with some data directory `mongod --port 27077 --dbpath=./data`
2. Run `npm install`
3. Run `npm start`
4. Go to [localhost:8007](http://localhost:8007/)