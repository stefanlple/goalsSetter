const asyncHandler= require("express-async-handler")

const getGoals= asyncHandler(async(req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add text to the text filed ")
    }
    console.log(req.body)
    res.status(200).json({message: "Get goals"})
})

const createGoal=asyncHandler(async(req, res) =>{
    res.status(200).json({message: "Create goal"})
})
const updateGoal= asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Update goal for ${req.params.id}`})
})
const deleteGoal=async(req, res) =>{
    res.status(200).json({message: `Delete goal for ${req.params.id}`})
}


module.exports = {
    getGoals, createGoal, updateGoal, deleteGoal
}
