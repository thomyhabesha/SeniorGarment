const db = require('../Config/Db'); // Keep your existing Db.js

// Function to send a message
const sendMessage = async (sender_id, receiver_id, message) => {
 
  try {
    const [result] = await db.promise().query(  // Explicitly call .promise()
      "INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)",
      [sender_id, receiver_id, message]
    );
    return result;
  } catch (err) {
    console.error(err); // Log error for debugging
    throw new Error('Failed to send message');
  }
};

// Function to get messages for a user
const getMessages = (senderId, receiverId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT m.*, u.Fname AS sender_name
       FROM messages m 
       JOIN users u ON m.sender_id = u.UserID 
       WHERE (sender_id = ? AND receiver_id = ?) 
      OR (sender_id = ? AND receiver_id = ?)
       ORDER BY m.timestamp DESC;
    `;
    db.query(query, [senderId, receiverId, receiverId, senderId], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = {
  sendMessage,
  getMessages,
};
