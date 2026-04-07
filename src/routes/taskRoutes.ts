import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
    createTask,
    getTasks,
    updateTask,
    deleteTask
} from "../controllers/taskController";

const router = Router();

router.use(authMiddleware); // 🔥 protege todas

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;