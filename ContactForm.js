import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');
        const formData = { name, email, message };

        // Correctly using the Vite environment variable
        const apiUrl = import.meta.env.VITE_API_URL;

        try {
            // Making the POST request to your Render backend
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
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
            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;
