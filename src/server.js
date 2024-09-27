const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/contact-form", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  username: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", async (req, res) => {
  const { username, email, message } = req.body;

  try {
    const newContact = new Contact({ username, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

