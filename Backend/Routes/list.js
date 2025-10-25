const router = require("express").Router();
const express = require("express");
const List = require("../models/list");
const User = require("../models/user");

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;

    // Find user by email
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create new task and associate with user
    const list = new List({title, body, user: existingUser._id});
    await list.save();

    // Add reference to user's list array
    existingUser.list.push(list._id);
    await existingUser.save();

    // Respond with full task
    return res.status(200).json({
      message: "Task added successfully",
      list
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Error while adding task" });
  }
});

// Update Task
router.put("/updateTask/:id", async (req, res) => {
  try {
    const {title, body} = req.body;
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list.save().then(() => {res.status(200).json({message: "Task updated sucessfully"})})
    }catch (error) {
  console.log(error);

}
});

// Delete Task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const {id} = req.body;
    const existingUser = await User.findByIdAndUpdate(id, {$pull: {list :req.params.id}});

    if (existingUser) {
      const list = await List.findByIdAndDelete(req.params.id).then(() => {res.status(200).json({
        message: "Task Delete sucessfully"})})
      };
    }catch (error) {
  console.log(error);

}
});

// Get all tasks
router.get("/getTasks/:id", async (req, res) => {
  const list = await List.find({user: req.params.id});
  res.status(200).json({list});
})

module.exports = router;
