// src/pages/api/storeEmail.js

import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { user_email } = req.body;
      console.log('Received user email:', user_email);

      if (!user_email) {
        return res.status(400).json({ error: 'User email is required' });
      }

      console.log('Received user email:', user_email);

      const filePath = path.join(process.cwd(), 'app', 'data', 'emails.json');
      const existingData = await fs.readFile(filePath, 'utf-8');
      const emails = existingData ? JSON.parse(existingData) : {};

      // Using the provided JSON structure
      emails.user_email = user_email;

      await fs.writeFile(filePath, JSON.stringify(emails));

      console.log('Emails after storage:', emails);

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error storing user email:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
