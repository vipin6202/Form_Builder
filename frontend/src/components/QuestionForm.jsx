import React, { useState } from "react";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Typography, TextField, Select, MenuItem } from "@mui/material";
import axios from "axios";

function QuestionForm() {
  const [formTitle, setFormTitle] = useState("Untitled Document");
  const [formDescription, setFormDescription] = useState("Form Description");
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      questionType: "radio",
      options: [{ optionText: "", image: null }],
      selectedOption: null, // Track selected option
      image: null,
      open: true,
    },
  ]);

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex].optionText = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionSelect = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].selectedOption = oIndex; // Set the selected option index
    setQuestions(updatedQuestions);
  };

  const addOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push({ optionText: "", image: null });
    setQuestions(updatedQuestions);
  };

  const deleteOption = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.splice(oIndex, 1);
    setQuestions(updatedQuestions);
  };

  const uploadImage = (qIndex, oIndex = null, file) => {
    const updatedQuestions = [...questions];
    if (oIndex !== null) {
      updatedQuestions[qIndex].options[oIndex].image =
        URL.createObjectURL(file);
    } else {
      updatedQuestions[qIndex].image = URL.createObjectURL(file);
    }
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    const newQuestion = {
      questionText: "",
      questionType: "radio",
      options: [{ optionText: "", image: null }],
      selectedOption: null,
      image: null,
      open: true,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleSaveForm = async () => {
    const formData = {
      doc_name: formTitle,
      doc_desc: formDescription,
      questions: questions.map((q) => ({
        ...q,
        image: q.image, // Keep the URL (consider replacing with backend upload)
        options: q.options.map((opt) => ({
          ...opt,
          image: opt.image, // Keep the URL (consider replacing with backend upload)
        })),
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:9000/api/forms",
        formData
      );
      alert("Form saved successfully!");
      console.log("Saved form data:", response.data);
    } catch (error) {
      console.error("Error saving form:", error);
      alert("Failed to save form. Please try again.");
    }
  };

  const questionUI = () =>
    questions.map((question, qIndex) => (
      <div key={qIndex} className="mb-6">
        <Accordion expanded={question.open}>
          {/* Accordion Header */}
          <AccordionSummary>
            <Typography>{`Question ${qIndex + 1}`}</Typography>
          </AccordionSummary>

          {/* Accordion Details */}
          <AccordionDetails>
            <div className="flex flex-col space-y-4">
              {/* Question Type Selector */}
              <div className="flex items-center space-x-2">
                <Select
                  value={question.questionType}
                  onChange={(e) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[qIndex].questionType = e.target.value;
                    setQuestions(updatedQuestions);
                  }}
                  variant="outlined"
                >
                  <MenuItem value="text">Paragraph</MenuItem>
                  <MenuItem value="checkbox">Checkbox</MenuItem>
                  <MenuItem value="radio">Multiple Choice</MenuItem>
                </Select>
              </div>

              {/* Question Input */}
              <div className="flex items-center space-x-2">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Question"
                  value={question.questionText}
                  onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                />
                <IconButton component="label">
                  <CropOriginalIcon />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) =>
                      uploadImage(qIndex, null, e.target.files[0])
                    }
                  />
                </IconButton>
              </div>
              {question.image && (
                <img src={question.image} alt="Question" className="max-h-40" />
              )}

              {/* Options */}
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center space-x-2">
                  {question.questionType === "radio" && (
                    <Radio
                      checked={question.selectedOption === oIndex} // Mark selected option
                      onChange={() => handleOptionSelect(qIndex, oIndex)} // Handle option selection
                    />
                  )}
                  {question.questionType === "checkbox" && (
                    <input
                      type="checkbox"
                      checked={question.selectedOption === oIndex} // Mark selected option
                      onChange={() => handleOptionSelect(qIndex, oIndex)} // Handle option selection
                    />
                  )}
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={`Option ${oIndex + 1}`}
                    value={option.optionText}
                    onChange={(e) =>
                      handleOptionChange(qIndex, oIndex, e.target.value)
                    }
                  />
                  <IconButton component="label">
                    <CropOriginalIcon />
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        uploadImage(qIndex, oIndex, e.target.files[0])
                      }
                    />
                  </IconButton>
                  {option.image && (
                    <img
                      src={option.image}
                      alt={`Option ${oIndex + 1}`}
                      className="max-h-10"
                    />
                  )}
                  <IconButton onClick={() => deleteOption(qIndex, oIndex)}>
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}

              {/* Add Option Button */}
              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => addOption(qIndex)}
              >
                Add Option
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    ));

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        {/* Form Title */}
        <div className="mb-4">
          <TextField
            fullWidth
            variant="standard"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            placeholder="Untitled Document"
            inputProps={{ style: { fontSize: "1.5rem", fontWeight: "bold" } }}
          />
          <TextField
            fullWidth
            variant="standard"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            placeholder="Form Description"
            inputProps={{ style: { fontSize: "1rem" } }}
          />
        </div>

        {/* Questions */}
        {questionUI()}

        {/* Add New Question Button */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={addQuestion}
          >
            Add Another Question
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveForm}>
            Save Form
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
