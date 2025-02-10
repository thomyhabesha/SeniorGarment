// controllers/ResetPasswordController.js
const ResetPassword = require('../Model/ResetPasswordModel');


const ResourcesController = {
  
   resetPassword : async (req, res) => {
    const { email } = req.body;
    try {
      console.log(`Received reset password request for: ${email}`);
  
      const result = await ResetPassword.resetPassword(email);
      console.log(`Reset password result: ${result}`);
  
      res.status(200).send(result);
    } catch (error) {
      console.error('Error in resetPassword:', error); // Log the exact error
  
      if (error === 'Email does not exist') {
        return res.status(404).send('Email does not exist');
      } else {
        return res.status(500).send({ error: 'Internal server error', details: error });
      }
    }
  }
}


module.exports= ResourcesController