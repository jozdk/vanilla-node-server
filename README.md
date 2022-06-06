# Vanilla Node Server

A simple HTTP server built with Node.js without libraries or frameworks. Supports static files, basic routing and request logging.

## Purpose

This project is primarily a learning project with regards to Node.js, web servers and HTTP. Solving some of the basic tasks of a web server with Vanilla Node.js is a great way to better understand the functioning of a back-end framework like Express.js and thereby use it better. Of course, you can always put the Vanilla Node Server to use as a simple, lightweight server for developing front-end applications, too.

## Features

- serve static files
- register GET and POST routes
- log requests

All of these functionalities can be individually mounted (see below). 

## Usage

### Requirements

Node.js (tested with v16)

### Running the server

To start the server with Nodemon:

`npm install`   
`npm run dev`

Or without Nodemon:

`npm start`

### Mounting/Unmounting

Just go to `index.js` and mount or unmount the function you do or don't want to use by adding/removing `app.use()` with either `logger`, `router.handle` and `static()` as argument. `static()` takes in a path to the directory, from which you want to serve static files.
