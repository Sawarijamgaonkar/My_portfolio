import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).send({ message: 'All fields are required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send({ message: 'Invalid email format' });
    }

    const formData = { name, email, subject, message };
    const filePath = path.resolve(__dirname, 'contact-data.json');

    fs.readFile(filePath, (err, data) => {
        let jsonData = [];
        if (err) {
            if (err.code === 'ENOENT') {
                // File does not exist, create new array
                jsonData = [];
            } else {
                console.error(err);
                return res.status(500).send({ message: 'Error saving contact form data' });
            }
        } else {
            try {
                jsonData = JSON.parse(data);
                if (!Array.isArray(jsonData)) {
                    jsonData = [];
                }
            } catch (parseErr) {
                console.error(parseErr);
                jsonData = [];
            }
        }

        jsonData.push(formData);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                return res.status(500).send({ message: 'Error saving contact form data' });
            } else {
                res.send({ message: 'Contact form data saved successfully' });
            }
        });
    });
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
