export const initialState = {
  questions: [
    {
      questionText: "Question",
      questionType: "radio",
      options: [{ optionText: "option 1" }],
      open: true,
      required: false,
    },
  ],
  doc_name: "untitled form",
  doc_desc: "add the description",
};

export const actionTypes = {
  SET_QUESTION: "SET_QUESTION",
  CHANGE_TYPE: "CHANGE_TYPE",
  SET_DOC_NAME: "SET_DOC_NAME",
  SET_DOC_DESC: "SET_DOC_DESC",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTION:
      return {
        ...state,
        questions: action.questions, // Correctly update the questions
      };
    case actionTypes.CHANGE_TYPE:
      return {
        ...state,
        questions: action.questions, // Correctly update the question type
      };
    case actionTypes.SET_DOC_NAME:
      return {
        ...state,
        doc_name: action.doc_name, // Use doc_name consistently
      };
    case actionTypes.SET_DOC_DESC:
      return {
        ...state,
        doc_desc: action.doc_desc, // Use doc_desc consistently
      };
    default:
      return state;
  }
};

export default reducer;
