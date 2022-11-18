import Student from "../models/student.model.mjs";

export const addStudent = async(req,res) => {
    try{
    const studentObj = {
    id : req.body.id,
    name :req.body.name,
    email : req.body.email ,
    number : req.body.number,
    class : req.body.class,
    marks : req.body.marks

    }
    const createStudent = await Student.create(studentObj);

    const response = {
        id : createStudent.id,
        name : createStudent.name,
        email :createStudent.email,
        number : createStudent.number,
        class : createStudent.class,
        marks : createStudent.marks,
        createdAt : createStudent.createdAt,
        updatedAt : createStudent.updatedAt
    }

    return res.status(201).send(response);
}catch{
    res.status(500).send("error in creating student");
}

} 


export const findStudent = async(req,res) => {
    try{
         
        //// finding needed data with queries  /////

        const findStudentsByQuery = {};
        
        ///// we can also find our pprovided id with queries  ////////

        const studentId = req.query.id;

        const studentName = req.query.name;
        const studentMarks = req.query.marks;
         
        if(studentId){
            findStudentsByQuery.id = studentId;
        }
         
        if(studentName){
            findStudentsByQuery.name = studentName;
        }
        if(studentMarks){
            findStudentsByQuery.marks = studentMarks;
        }


    const student = await Student.find(findStudentsByQuery);

    return res.status(200).send(student);

    }catch{
        res.status(500).send("error in finding students");
    }
}

////  finding data with our provided id  /////

export const findStudentById = async(req,res) => {
    try{
    const student = await Student.findOne({id : req.params.id });
    
    return res.status(200).send(student);

    }catch{
        res.status(400).send("error in finding by id");
    }
}


//// updating Student data  /////

export const updateStudent = async(req,res) => {
   try{ 

    const student = await Student.findOne({id : req.body.id});

    student.name = req.body.name != undefined ? req.body.name : student.name;
    student.email = req.body.email != undefined ? req.body.email : student.email;
    student.number = req.body.number != undefined ? req.body.number : student.number;
    student.marks = req.body.marks != undefined ? req.body.marks : student.marks;
    student.class = req.body.class != undefined ? req.body.class : student.class;

    const response = await student.save();
    
    return res.status(200).send({ 
    id : response.id, 
    name : response.name,
    email : response.email,
    number : response.number,
    class : response.class,
    marks : response.marks

    })

   }catch{
    res.status(400).send("error happened in updating");
   }
}

export const deleteStudent = async(req,res) => {

    try{
    const student = await Student.findOne({id : req.body.id});

    if(student == null){
        res.status(400).send("student is not there");
    }

    await Student.deleteOne({id : req.body.id});

    return res.status(200).send("student data is removed successfully");
 
}catch{
    res.status(400).send("error while deleting");
}
}