// const express = require('express');
// const router = express.Router();
// const Message = require('../models/messageSchema');  // Import the Message model

// // Endpoint to create a new message
// router.post('/messages', async (req, res) => {
//   const { personName, companyName, message } = req.body;
  
//   if (!personName || !companyName || !message) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     const newMessage = new Message({ personName, companyName, message });
//     await newMessage.save();
//     res.status(201).json(newMessage);
//   } catch (error) {
//     if (error.code === 11000) {  // Duplicate key error code
//       res.status(400).json({ error: 'This person has already sent this message' });
//     } else {
//       console.error('Error saving message:', error);
//       res.status(500).json({ error: 'Failed to save message' });
//     }
//   }
// });

// // Endpoint to get all messages for admin
// router.get('/messages', async (req, res) => {
//   try {
//     const messages = await Message.find();
//     res.status(200).json(messages);
//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     res.status(500).json({ error: 'Failed to fetch messages' });
//   }
// });

// module.exports = router;

import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", getAllMessages);

export default router;

