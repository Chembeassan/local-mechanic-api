const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

async function connectToDB() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    return client.db(); // defaults to 'local_mechanic' from URI
  } catch (error) {
    console.error('❌ DB Connection Error:', error);
  }
}

module.exports = connectToDB;

