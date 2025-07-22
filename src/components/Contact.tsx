import React, { useState } from 'react';

// REMOVED: import fs from 'fs'; - This cannot be used in the browser.

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // Optional: for showing feedback to the user

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');
        const formData = { name, email, message };

        // The URL for your Render backend API endpoint
        // It's stored in an environment variable for security and flexibility
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'; // Fallback for local dev

        try {
            const response = await fetch(`${apiUrl}/api/contact`, { // Example endpoint: /api/contact
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                // Clear the form
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} required />
            </label>
            <button type="submit">Send</button>
            {status && <p>{status}</p>} {/* Display sending status to the user */}
        </form>
    );
};

export default ContactForm;
