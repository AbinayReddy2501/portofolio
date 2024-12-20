const express = require("express");
const Message = require("../models/messageModel");
const router = express.Router();

// Get all messages
router.get("/", async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});

// Post a new message
router.post("/", async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();
        res.json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: "Failed to save message" });
    }
});

module.exports = router;
