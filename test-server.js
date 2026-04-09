// Simple test server to verify the application works
// This is a minimal version that doesn't require npm dependencies

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Simple in-memory storage
let users = [];
let sessions = [];

// Helper function to generate random token
function generateToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Helper function to find user by username
function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

// Helper function to find session by token
function findSessionByToken(token) {
  return sessions.find(session => session.token === token);
}

// Simple hash function (not secure, just for testing)
function simpleHash(password) {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
}

// Pre-create a test user for demonstration
if (users.length === 0) {
  users.push({
    id: 1,
    username: 'mouzz',
    email: 'ajeestopper@gmail.com',
    password: simpleHash('password123'),
    createdAt: new Date(),
    lastLogin: null
  });
}

// Serve static files
function serveStaticFile(filePath, contentType, response) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1>404 Not Found</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(data);
    }
  });
}

// Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Serve static files
  if (pathname === '/' || pathname === '/index.html') {
    serveStaticFile(path.join(__dirname, 'frontend', 'index.html'), 'text/html', res);
  } else if (pathname === '/dashboard.html') {
    serveStaticFile(path.join(__dirname, 'frontend', 'dashboard.html'), 'text/html', res);
  } else if (pathname === '/styles.css') {
    serveStaticFile(path.join(__dirname, 'frontend', 'styles.css'), 'text/css', res);
  } else if (pathname === '/script.js') {
    serveStaticFile(path.join(__dirname, 'frontend', 'script.js'), 'application/javascript', res);
  } else if (pathname === '/api/auth/register' && method === 'POST') {
    // Register endpoint
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const { username, email, password } = data;

        if (!username || !email || !password) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Please provide username, email, and password' }));
          return;
        }

        if (findUserByUsername(username)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Username already exists' }));
          return;
        }

        const newUser = {
          id: users.length + 1,
          username,
          email,
          password: simpleHash(password),
          createdAt: new Date(),
          lastLogin: null
        };

        users.push(newUser);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'User registered successfully' }));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Internal server error' }));
      }
    });
  } else if (pathname === '/api/auth/login' && method === 'POST') {
    // Login endpoint
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const { username, password } = data;

        if (!username || !password) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Please provide username and password' }));
          return;
        }

        const user = findUserByUsername(username);
        if (!user) {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Invalid credentials' }));
          return;
        }

        if (user.password !== simpleHash(password)) {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Invalid credentials' }));
          return;
        }

        user.lastLogin = new Date();
        const token = generateToken();
        const session = {
          userId: user.id,
          token,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
          createdAt: new Date()
        };

        sessions.push(session);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Login successful',
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }
        }));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Internal server error' }));
      }
    });
  } else if (pathname === '/api/auth/logout' && method === 'POST') {
    // Logout endpoint
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const { token } = data;

        if (!token) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Token required' }));
          return;
        }

        sessions = sessions.filter(session => session.token !== token);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Logout successful' }));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Internal server error' }));
      }
    });
  } else if (pathname === '/api/auth/me' && method === 'GET') {
    // Get user info endpoint
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Authentication required' }));
      return;
    }

    const session = findSessionByToken(token);
    if (!session) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Invalid or expired token' }));
      return;
    }

    const user = users.find(u => u.id === session.userId);
    if (!user) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'User not found' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        lastLogin: user.lastLogin
      }
    }));
  } else {
    // 404 for other routes
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
  console.log('You can now open your browser and go to http://localhost:3000');
  console.log('The application is ready to use!');
});