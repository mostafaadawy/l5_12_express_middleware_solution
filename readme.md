Working with Routes
Router Object

When building an express application, it's best practice to keep the server and application endpoints and functionality separate. With the router object, you're able to create a directory of routes and separate the functionality of each route onto its own file.
Router();

The router method is applied to the top-level express object. With this method, you are able to create a routes object that you can apply your endpoints to rather than the application object.

import express from 'express';   
const routes = express.Router();

routes.get('/', (req, res) => { //do something });

export default routes;

Using the Router

To use the router you have created, you must first export the router. Then on your main application entry point, you can import your routes module. Then use app.use(); to use your routes module as middleware.
Setting Up a Router
Demo Summary:

File Structure

    Create a directory for routes under /src
    Create a directory for your individual route files
    Place a main route index file in your routes directory

Main Route Index

    Import express from Express
    create your routes object from the express.Router(); method
    Create your root endpoint for getting the root path of your app using your routes object
    Export your routes object

Main Application Entrypoint

    Import your routes object
    Use the use method on your application object to apply your router as middleware

import routes from './routes/index';

app.use('/', routes);

Setting Up a Router Part 2
Demo Summary:

File Structure

    Create individual files for each different route your application will contain under your individual routes folder./routes/api

Individual Route Rile

    Import express from express
    Create your individual route object with express.Router();
    Use the new object for all of your API endpoints pertaining to that route
    Export your route object

Main Route File

    Import your individual routes from their paths
    Use routes.use(); to apply your individual routes as middleware setting the path to use and then which middleware to use for that path

import route1 from './api/route1';
import route1 from './api/route2';

routes.use('/route1', route1);
routes.use('/route2', route2);

New Terms
Term 	Definition
Router 	Middleware that directs your application to different routes
Further Reading

The official guide to using Express Routing.

A tutorial and guide from MDN on working with the express router: Routes and Controllers.
