import * as authService from "../services/authService";
import { Request, Response } from "express";

//register endpoint
export const registerUser = async (req: Request, res: Response) => {

    try {
        const result = await authService.register(req.body);
        res.json(result);

    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

//login endpoint
export const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await authService.login(req.body);
        res.json(result);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};