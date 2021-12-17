Instructions

The Express server is already complete. Create 3 endpoints. Then write middleware that logs the endpoint to the console when visited. Only include the middleware on 2 of the 3 endpoints. Build your TypeScript project and confirm that your logger works on the build.

Example: "/countries was visited"

NOTE: a popup of "Renderer Failure: tsconfig.json" may open when starting this project. It is safe to ignore this error. Error is due to the comments in tsconfig.json not being considered valid JSON; however, it is generally considered safe to place comments in JSON config files.

 dont forget 
npm install -g ts-node

http://localhost:3000/api
http://localhost:3000/api/firstEndPoint
...
To Complete This Exercise:

    Create three routes that send a response to the browser.
    Create your middleware logger, either in the index.ts file or in a separate file. Make sure to add types to your response and request parameters of the callback function. The only requirement for the middleware was that it logs something to console when the endpoint is reached.

const logger = (
    req: express.Request, 
    res: express.Response, 
    next: Function
): void => {};

    If middleware is in an external file, export then import it for use on your routes.
    Apply your middleware to 2 of your 3 endpoints by adding it as an argument for your endpoints.

app.get('/route', logger, (req, res) => {
  res.send('success!');
});

    Run your application to test that it works.

