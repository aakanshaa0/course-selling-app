require("dotenv").config();

const express = require('express');
const app = express();

const {userRouter} = require('./routes/user');
const {adminRouter} = require('./routes/admin');
const {courseRouter} = require('./routes/course');

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

const PORT = process.env.PORT || 3000;

async function main(){
    try{
            app.listen(PORT, ()=>{
            console.log("Server is running on port 3000");
        });
    }
    catch(e){
        console.error("Failed to connect to the database", e);
    }
}

main();