
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./route/user.route.js"; // ✅ use your routes file

const app = express();
const PORT = 4001;

// Middleware1
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/bookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ---------------------- BOOKS ---------------------- */
// Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});

// Model
const Book = mongoose.model("Book", bookSchema);

// Routes
app.get("/book", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------------- USERS ---------------------- */
// ✅ use your routes (controller handles hashing)
app.use("/user", userRoutes);

/* ---------------------- DEFAULT ---------------------- */
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
