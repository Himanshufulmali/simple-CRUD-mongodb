import express from "express";
import dotenv from "dotenv";
dotenv.config({silent : process.env.NODE_ENV === "production"});
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userM from "./models/student.model.mjs";


const app = express();

/// body-parser for adding input ////

app.use(bodyParser.json());


//// making connection to mongodb /////

mongoose.connect(process.env.mongo);
const db = mongoose.connection;
db.on("error", () => {
    console.log("error happened in connecting mongo");
});
db.once("open",() => {
    console.log("mongo connection is successful");
    init();
});


/// a function to clear collection everytime we start server  ///

const init = async() => {
await userM.collection.drop();
console.log("collection is empty");
} 




//// adding routes ///
import route from "./routes/student.route.mjs";
route(app);


///// starting server  /////

const start = async() => {

await app.listen(process.env.PORT);
console.log("server connected on",process.env.PORT);

}
start();