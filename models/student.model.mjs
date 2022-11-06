import mongoose from "mongoose";

const studentModel = new mongoose.Schema({
    id : {
      type : Number,
      required : true,
      unique : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    number : {
        type : Number,
        required : true,
    },
    class : {
        type : String,
        required : true
    },
    marks : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : () => {
            return Date.now()
        }
    },
    updatedAt : {
        type : Date,
        default : () => {
            return Date.now()
        }
    }

});

export default mongoose.model("studentData",studentModel);