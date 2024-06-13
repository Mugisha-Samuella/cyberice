const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const FormDataModel = require("./models/FormData");
const SecurityThreatModel = require("./models/SecurityThreat");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/cybericedb", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const existingUser = await FormDataModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new FormDataModel({
      name,
      email,
      password: hashedPassword, // Save the hashed password
    });

    await newUser.save();
    res.status(201).json("Account created successfully!");
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await FormDataModel.findOne({ email });
    if (!user) {
      return res.status(404).json("No records found!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Compare the password

    if (isPasswordValid) {
      res.json("Success");
    } else {
      res.status(400).json("Wrong password");
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// CRUD Operations for SecurityThreat
app.post("/threats", async (req, res) => {
  const { title, description, severity, dateReported, status } = req.body;

  try {
    const newThreat = new SecurityThreatModel({ title, description, severity, dateReported, status });
    await newThreat.save();
    res.status(201).json(newThreat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/threats", async (req, res) => {
  try {
    const threats = await SecurityThreatModel.find();
    res.status(200).json(threats);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.put("/threats/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, severity, dateReported, status } = req.body;

  try {
    const updatedThreat = await SecurityThreatModel.findByIdAndUpdate(id, { title, description, severity, dateReported, status }, { new: true });
    res.status(200).json(updatedThreat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/threats/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await SecurityThreatModel.findByIdAndDelete(id);
    res.status(200).json("Threat deleted successfully");
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});