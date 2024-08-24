import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'discussionform.json');

  // Handle GET request - fetch and return discussion data
  if (req.method === 'GET') {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load discussion data' });
    }
  }

  // Handle POST request - add new discussion post
  else if (req.method === 'POST') {
    try {
      const newPost = req.body;
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);

      // Add new post to the data array
      data.push(newPost);

      // Write updated data back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      res.status(201).json({ message: 'Post added successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add new post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
