import express from 'express';
const thirdEndPoint = express.Router();
thirdEndPoint.get('/thirdEndPoint',(req,res)=>{
    res.send('Third End Point');
});
export default thirdEndPoint;