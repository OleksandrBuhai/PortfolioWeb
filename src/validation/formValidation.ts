export const formsInpuFieldsValidation = [
  {
    label: "name",
    type: "text",
    placeholder: "",
    validation: {
      required: "Name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters long",
      },
      maxLength: {
        value: 30,
        message: "Name must be at most 30 characters long",
      },
    },
  },
  {
    label: "email",
    type: "email",
    placeholder: "",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    label: "subject",
    type: "text",
    placeholder: "",
    validation: {
      required: "Subject is required",
      minLength: {
        value: 5,
        message: "Subject must be at least 5 characters long",
      },
      maxLength: {
        value: 30,
        message: "Subject must be at most 30 characters long",
      },
    },
  },
];

export const formsTextAreaValidation = {
  label: "message",
  type: "message",
  placeholder: "",
  validation: {
    required: "Message is required",
    minLength: {
      value: 5,
      message: "Message must be at least 10 characters long",
    },
    maxLength: {
      value: 300,
      message: "Message must be no more than 300 characters long",
    },
  },
};
