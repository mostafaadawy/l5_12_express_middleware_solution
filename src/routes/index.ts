import express from "express";
import firstEndPoint from "./api/firstEndPoint";
import secondEndPoint from "./api/secondEndPoint";
import thirdEndPoint from "./api/thirdEndPoint";
import logger from "../middleware/logger"

const routes =express.Router();
routes.use('/',logger, firstEndPoint);
routes.use('/',logger, secondEndPoint);
routes.use('/', thirdEndPoint);

routes.get('/', (req, res)=>{
    res.send('Home')
});
export default routes;