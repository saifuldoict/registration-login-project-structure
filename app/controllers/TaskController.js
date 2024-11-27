
export const CreateTask = async(req, res)=>{
    return res.json({status:"success","message":"User created successfully"})
}

export const UpdateTaskStatus = async(req, res)=>{
    return res.json({status:"success","message":"Task status updated successfully"})
}

export const TaskListByStatus = async(req, res)=>{
    return res.json({status:"success","message":"Task list by status successfully"})
}

export const CountTask = async(req, res)=>{
    return res.json({status:"success","message":"Count task status successfully"})
}

export const DeleteTask = async(req, res)=>{
    return res.json({status:"success","message":"Task deleted successfully"})
}