import mongoose from 'mongoose';

// Define the schema for storing messages
const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message Must Contain At Least 10 Characters!"],
  },      
});

// Add a compound index to enforce unique messages per person
messageSchema.index({ personName: 1, message: 1 }, { unique: true });

// Create and export the model for the Message schema
export const Message = mongoose.model("Message", messageSchema);