const express = require('express');
const cors = require('cors');

// Create express app
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Mock user database (in-memory)
const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "admin",
    email: "admin@example.com"
  }
];

// Login endpoint
app.post('/login', (req, res) => {
  console.log('Login request received:', req.body);
  
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    
    // Find user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      console.log('Login successful for user:', username);
      // Create a simple token (base64 encoded username + timestamp)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      res.json({
        token: token,
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          email: user.email
        }
      });
    } else {
      console.log('Invalid credentials for user:', username);
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Token validation endpoint
app.get('/validate-token', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const token = authHeader.substring(7);
    
    try {
      const decoded = Buffer.from(token, 'base64').toString();
      const username = decoded.split(':')[0];
      
      const user = users.find(u => u.username === username);
      
      if (user) {
        res.json({
          id: user.id,
          username: user.username,
          role: user.role,
          email: user.email
        });
      } else {
        res.status(401).json({ message: 'Invalid token' });
      }
    } catch (decodeError) {
      console.error('Token decode error:', decodeError);
      res.status(401).json({ message: 'Invalid token format' });
    }
  } catch (error) {
    console.error('Token validation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Mock auth server is running' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock auth server is running on http://localhost:${PORT}`);
});