import React, { useState } from 'react';
import fs from 'fs';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { name, email, message };
        fs.readFile('D:\college\projects\portfolio_web\project-bolt-sb1-1pevmemh\project\contact-data.json', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const jsonData = JSON.parse(data);
                jsonData.push(formData);
                fs.writeFile('D:\college\projects\portfolio_web\project-bolt-sb1-1pevmemh\project\contact-data.json', JSON.stringify(jsonData), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Contact form data saved successfully');
                    }
                });
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;