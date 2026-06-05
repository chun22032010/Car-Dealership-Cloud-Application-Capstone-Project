import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        // Logic handles registration API submission natively
    };

    return (
        <div className="register-container card mx-auto my-5 p-4 shadow" style={{maxWidth: "500px"}}>
            <h2 className="text-center mb-4">Create Your Account</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        placeholder="Enter your username" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        placeholder="Enter your first name" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        placeholder="Enter your last name" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email address" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your account password" 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    );
};

export default Register;
