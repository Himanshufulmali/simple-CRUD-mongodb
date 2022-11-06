import studentV from "../models/student.model.mjs";

export const verifyS = async(req,res,next) => {
    try{
    if(!req.body.id){
      return  res.status(400).send("id is not provided");
    }
    const studentId = await studentV.findOne({id : req.body.id})
    if(studentId !== null){
       return res.status(400).send("student id is already taken");
    }

    if(!req.body.name){
       return res.status(400).send("name is not provided");
    }
    if(!req.body.email){
       return res.status(400).send("email is not provided");
    }
    const studentEmail = await studentV.findOne({email : req.body.email});
    if(studentEmail !== null){
       return res.status(400).send("email is already taken");
    }
    if(!req.body.number){
       return res.status(400).send("number is not provided");
    }
    if(!req.body.class){
      return res.status(400).send("class is not provided"); 
    }
    if(!req.body.marks){
        return res.status(400).send("marks are not provided")
    }
    next();
}catch{
    res.status(500).send("error in validation");
}
}
 