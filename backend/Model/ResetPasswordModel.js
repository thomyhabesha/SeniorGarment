const connection = require('../Config/Db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tafethomas07@gmail.com',
        pass: 'bmme sddv gpxh yxxn'
    }
});

const generateCode = () => Math.floor(100000 + Math.random() * 900000);

const sendEmail = (email, code, callback) => {
    const mailOptions = {
        from: 'tafethomas07@gmail.com',
        to: email,
        subject: 'Password Reset Code',
        text: `Your password reset code is: ${code}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return callback(error);
        }
        console.log('Email sent:', info.response);
        callback(null, info);
    });
};

const resetPassword = (email, callback) => {
    const code = generateCode();
    
    connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
            console.error('Error checking email existence:', error);
            return callback('Error checking email existence');
        }
        
        if (results.length === 0) {
            return callback('Email does not exist');
        }
        
        connection.query('UPDATE users SET reset_code = ? WHERE email = ?', [code, email], (error) => {
            if (error) {
                console.error('Error updating reset code:', error);
                return callback('Error updating reset code');
            }
            
            sendEmail(email, code, (emailError) => {
                if (emailError) {
                    return callback('Error sending email');
                }
                callback(null, 'Code sent successfully');
            });
        });
    });
};

module.exports = { resetPassword };
