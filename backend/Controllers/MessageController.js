const Message = require('../Model/MessagesModel');

// Controller to fetch messages
const getMessages = async (req, res) => {
  const { senderId, receiverId } = req.params;
  
  try {
    const messages = await Message.getMessages(senderId, receiverId);
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, message: 'Error fetching messages' });
  }
};

// Controller to send a message
const sendMessage = async (req, res) => {
  const { senderId, receiverId, message } = req.body;
  
  try {
    const result = await Message.sendMessage(senderId, receiverId, message);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
};

module.exports = {
  getMessages,
  sendMessage
};
