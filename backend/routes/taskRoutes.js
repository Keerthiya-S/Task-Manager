const express = require('express');
const router = express.Router();
const connectDB = require('../db');

// Helper to get collection
const getCollection = async () => {
  const db = await connectDB();
  return db.collection('tasks');
};

// POST /tasks → Add a new task
router.post('/', async (req, res) => {
  const { title, status = 'Pending' } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const collection = await getCollection();
    const result = await collection.insertOne({ title, status });

    const newTask = { _id: result.insertedId, title, status }; // <-- Correct here

    res.status(201).json({
      message: 'Task created',
      task: newTask,
    });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ message: 'Error adding task', error: error.message });
  }
});

// GET /tasks → Get all tasks

router.get('/', async (req, res) => {
  try {
    const collection = await getCollection();
    const tasks = await collection.find().toArray(); 
    res.json(tasks); 
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
});



// taskRoutes.js

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const collection = await getCollection();
    const { ObjectId } = require('mongodb'); 
    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, 
      { $set: { status } }
    );

    if (result.modifiedCount === 1) {
      res.json({ message: 'Task updated successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
});



module.exports = router;
