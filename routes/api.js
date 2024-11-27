import express from "express";
const router = express.Router();
import * as TaskController from "../app/controllers/TaskController.js";
import * as UsersController from "../app/controllers/UsersController.js";

// Middleware to check if user is authenticated User

router.post("/Registration", UsersController.Registration)
router.post("/Login", UsersController.Login)
router.get("/ProfileDetails", UsersController.ProfileDetails)
router.post("/ProfileUpdate", UsersController.ProfileUpdate)


router.get("/EmailVerify", UsersController.EmailVerify)
router.get("/CodeVerify", UsersController.CodeVerify)
router.post("/ResetPassword", UsersController.ResetPassword)


//Tasks
router.post("/CreateTask", TaskController.CreateTask)
router.get("/UpdateTaskStatus", TaskController.UpdateTaskStatus)
router.get("/TaskListByStatus", TaskController.TaskListByStatus)
router.get("/DeleteTask", TaskController.DeleteTask)
router.get("/CountTask", TaskController.CountTask)



export default router;