const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; 
const dbName = 'taskmanager'; 

let db;

const connectDB = async () => {
  if (db) return db;

  try {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB connected');
    return db;
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    throw err;
  }
};

module.exports = connectDB;
