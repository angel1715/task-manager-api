import { Request, Response } from "express";
import * as taskService from "../services/taskService";

export const createTask = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const result = await taskService.createTask({
      title: req.body.title,
      userId
    });

    res.json(result);

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    // 🧠 query params
    const completed = req.query.completed as string;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await taskService.getTasks(
      userId,
      completed,
      page,
      limit
    );

    res.json(result);

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

type Params = {
  id: string;
};

export const updateTask = async (req: Request<Params>,
  res: Response) => {
  try {
    const userId = (req as any).user.id;
    

    const result = await taskService.updateTask(
      req.params.id,
      userId,
      req.body
    );

    res.json(result);

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteTask = async (req: Request<Params>, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const result = await taskService.deleteTask(
      req.params.id,
      userId
    );

    res.json(result);

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};