import { addStudent } from "../controllers/student.controller.mjs";
import { findStudent } from "../controllers/student.controller.mjs";
import { verifyS } from "../middleware/verify.students.mjs";
//import { findStudentById } from "../controllers/student.controller.mjs";
import { updateStudent } from "../controllers/student.controller.mjs";
import { deleteStudent } from "../controllers/student.controller.mjs";


export default (app) => {

    app.post("/parceldeck/api/add/students",[verifyS],addStudent);

    app.get("/parceldeck/api/add/students",findStudent);

   // app.get("/parceldeck/api/add/students/:id",findStudentById);

    app.put("/parceldeck/api/add/students/:id",updateStudent);

    app.delete("/parceldeck/api/add/students/:id",deleteStudent);
}