// db.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Local MongoDB URL
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
        const db = client.db("mydatabase");
        
        // Example: Insert a document
        const result = await db.collection("users").insertOne({ name: "John", age: 25 });
        console.log("Inserted:", result.insertedId);
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err);
    } finally {
        await client.close();
    }
}

connectDB();
