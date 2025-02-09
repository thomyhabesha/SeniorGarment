const { pool } = require('../config/db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'tafethomas07@gmail.com',
        // pass: 'bmme sddv gpxh yxxn'
        user: 'tafethomas07@gmail.com',
        pass: 'bmme sddv gpxh yxxn'
    }
});

const generateCode = () => Math.floor(100000 + Math.random() * 900000);

const sendEmail = (email, code) => {
    const mailOptions = {
        from: 'tafethomas07@gmail.com',
        to: email,
        subject: 'Password Reset Code',
        text: `Your password reset code is: ${code}`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info);
            }
        });
    });
};

const resetPassword = (email) => {
    const code = generateCode();

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
            if (error) {
                console.log('Error checking email existence:', error);
                return reject('Error checking email existence');
            }

            if (results.length === 0) {
                return reject('Email does not exist');
            }

            pool.query('UPDATE users SET reset_code = ? WHERE email = ?', [code, email], (error) => {
                if (error) {
                    console.log('Error updating reset code:', error);
                    return reject('Error updating reset code');
                }

                sendEmail(email, code)
                    .then(() => resolve('Code sent successfully'))
                    .catch(reject);
            });
        });
    });
};

module.exports = { resetPassword };
