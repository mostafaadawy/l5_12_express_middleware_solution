import express from 'express';
const firstEndPoint = express.Router();
firstEndPoint.get('/firstEndPoint',(req,res)=>{
    res.send('First End Point');
});
export default firstEndPoint;