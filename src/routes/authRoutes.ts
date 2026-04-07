import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.get("/auth/profile", authMiddleware, (req, res) => {

    res.json({
        message: "Ruta protegida",
        user: (req as any).user
    });

})

export default router;