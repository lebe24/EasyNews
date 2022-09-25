const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const start = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://classed:ORbxmNUIguOeG17B@cluster0.fre0u.mongodb.net/NewsFeeds?retryWrites=true&w=majority"
        );
        app.listen(3000, () => {
            console.log("Server is running...");   
        });
    }catch(e){
        console.log(e);
    }
}

start();