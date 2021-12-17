import express from 'express';
const secondEndPoint = express.Router();
secondEndPoint.get('/secondEndPoint',(req,res)=>{
    res.send('Second End Point');
});
export default secondEndPoint;