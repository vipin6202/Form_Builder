const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 9000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
    .connect("mongodb+srv://vipin620274:vipin620274@cluster0.58gko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/formbuilder", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Mongoose Schema and Model
const OptionSchema = new mongoose.Schema({
    optionText: String,
});

const QuestionSchema = new mongoose.Schema({
    questionText: String,
    questionType: String,
    options: [OptionSchema],
    open: Boolean,
    required: Boolean,
});

const FormSchema = new mongoose.Schema({
    doc_name: String,
    doc_desc: String,
    questions: [QuestionSchema],
});

const Form = mongoose.model("Form", FormSchema);

// Routes

// Get all forms
app.get("/api/forms", async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: "Error fetching forms" });
    }
});

// Create a new form
app.post("/api/forms", async (req, res) => {
    const { doc_name, doc_desc, questions } = req.body;

    try {
        const newForm = new Form({
            doc_name,
            doc_desc,
            questions,
        });

        const savedForm = await newForm.save();
        res.status(201).json(savedForm);
    } catch (error) {
        res.status(500).json({ error: "Error creating form" });
    }
});

// Get a form by ID
app.get("/api/forms/:id", async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ error: "Form not found" });
        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ error: "Error fetching form" });
    }
});

// Update a form
app.put("/api/forms/:id", async (req, res) => {
    try {
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedForm) return res.status(404).json({ error: "Form not found" });
        res.status(200).json(updatedForm);
    } catch (error) {
        res.status(500).json({ error: "Error updating form" });
    }
});

// Delete a form
app.delete("/api/forms/:id", async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) return res.status(404).json({ error: "Form not found" });
        res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting form" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
