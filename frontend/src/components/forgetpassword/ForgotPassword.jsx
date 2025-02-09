import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Login.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [resetCodeSent, setResetCodeSent] = useState(false);
    const [verificationError, setVerificationError] = useState('');
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
    const [newPassword, setNewPassword] = useState('')
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [passwordResetError, setPasswordResetError] = useState(false);
    const [newpasswordSuccess, setnewPasswordSuccess] = useState(false);
    const [timer, setTimer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [emailNotFoundError, setEmailNotFoundError] = useState(false); // State to indicate email not found error

    useEffect(() => {
        if (resetCodeSent) {
            const timerId = setTimeout(() => {
                setResetCodeSent(false);
            }, 3000000); // 2 minutes
            setTimer(timerId);
        } else {
            clearInterval(timer);
        }
    }, [resetCodeSent]);

    const handleEmailSubmit = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/api/resetPassword', { email });
            setResetCodeSent(true);
            setEmailNotFoundError(false); // Reset email not found error state
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 404) {
                setEmailNotFoundError(true);
            }
        } finally {
            setLoading(false);
        }
    };


    const handleVerificationSubmit = async () => {
        try {
            setLoading(true);
            await axios.post('https://api.kefetastartups.com/verifyCode/verify', { email, code });
            setPasswordResetSuccess(true);
            clearInterval(timer); // Clear the timer
        } catch (error) {
            setVerificationError('Invalid code');
        } finally {
            setLoading(false);
        }
    };

const handlePasswordResetSubmit = async () => {
        try {
            setLoading(true);
            // Check if new password meets length requirement
            if (newPassword.length < 8) {
                setPasswordLengthError(true);
                return;
            }
            await axios.post('https://api.kefetastartups.com/newpassword/resetUserPassword', { email, newPassword });
            setPasswordLengthError(false);
            setPasswordResetError(false);
            setnewPasswordSuccess(true);
        } catch (error) {
            setPasswordResetError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
        <div className="overlay">
          <div className="loginBox">
            <div className="loginBoxTop">
              <h2 className="title">Reset</h2>
              <p className="subtitle"><Link className='loginlink' to="/" style={{ color: "blue" }}>Back to login</Link></p>
            </div>
            <form className="form">
                
                <div className="signlo-formgroup" >
                   
                    {resetCodeSent ? (
                        <div>
                            {passwordResetSuccess ? (
                                <div className="reset-div">
                                    {newpasswordSuccess && <p style={{ color: "green" }}>Reset successful</p>}
                                    <div>
                                        <input className='input' type="password" placeholder="New password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                                        <button onClick={handlePasswordResetSubmit} disabled={loading}   className="button">SetNew Password</button>
                                        {loading &&<p>loading...</p>}
                                    </div>
                                    {passwordLengthError && <p style={{ color: "red" }}>Password length</p>}
                                    {passwordResetError && <p style={{ color: "red" }}>Error setting</p>}
                                    {newpasswordSuccess && <p style={{ color: "white" }}>Reset success<Link style={{fontSize:"0.7rem"}} to="/" className='navto-login'>Login</Link></p>}
                                </div>
                            ) : (
                                <div className="reset-div" >
                                    <p style={{ color: "green" }}>verification sent</p>
                                    <div>
                                        <input className='input' type="text" placeholder="Enter code" value={code} onChange={e => setCode(e.target.value)} />
                                        <button onClick={handleVerificationSubmit} disabled={loading}  className="button">Submit</button>
                                        {loading && <p>loading...</p>}
                                    </div>
                                    <p style={{ color: "grey" }} ><span style={{ color: "red", marginRight:"4px", fontSize:"0.87rem" }}> 2 </span> Minute remaining</p>
                                    {verificationError && <p style={{ color: "red" }}>{verificationError}</p>}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='inp-btn'>
                            <input className='input' type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                            <button onClick={handleEmailSubmit} disabled={loading}  className="button">Send Reset Code</button>
                            {loading && <p>loading...</p>}
                            {emailNotFoundError && <p style={{ color: "red" }}>Email not found</p>} {/* Render if email not found */}
                   
                        </div>
                    )}
                </div>
            </form>
        </div>
        </div>
        </div>
    );
}

export default ForgotPassword;