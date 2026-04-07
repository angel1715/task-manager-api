import Task from "../models/Task";

type TaskInput = {
    title: string;
    userId: string;
}



//create
export const createTask = async ({ title, userId }: TaskInput) => {

    if (!title) {
        throw new Error("Title is required");

    }

    //create new task
    const task = await Task.create({
        title,
        user: userId
    });

    return {
        success: true,
        message: "Task created",
        data: task
    };
};

export const getTasks = async (
    userId: string,
    completed?: string,
    page: number = 1,
    limit: number = 10
) => {

    
    const filter: any = { user: userId };
    
    
    if (completed !== undefined) {
        filter.completed = completed === "true";
    }
    
    // 🧠 pagination
    const skip = (page - 1) * limit;
    
    const tasks = await Task.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

    return {
        success: true,
        page,
        limit,
        data: tasks
    };
};

//Update task
export const updateTask = async (taskId: string, userId: string, data: any) => {
    
    const task = await Task.findById(taskId);
    
    if (!task) {
        throw new Error("Tarea no encontrada");
    }
    
    
    task.title = data.title ?? task.title;
    task.completed = data.completed ?? task.completed;
    
    await task.save();

    return {
        success: true,
        message: "Tarea actualizada",
        data: task
    };
};

// 🧱 DELETE
export const deleteTask = async (taskId: string, userId: string) => {

    const task = await Task.findById(taskId);

    if (!task) {
        throw new Error("Tarea no encontrada");
    }

    if (task.user.toString() !== userId) {
        throw new Error("No autorizado");
    }

    await task.deleteOne();

    return {
        success: true,
        message: "Tarea eliminada"
    };
};

