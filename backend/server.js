const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);
app.get('/', (req,res)=>{
    res.send("Hello, welcome to backend server");
})
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
