

import express from 'express'; 
import cors from 'cors';      
import axios from 'axios';    
 
const app = express();

const Port = process.env.Port || 4002

app.use(express.json());
app.use(cors());


app.get("/",(req, res)=>{
 res.send("working")
});


app.listen(Port,()=>{
    console.log(`server running on this port ${Port}`)

});

