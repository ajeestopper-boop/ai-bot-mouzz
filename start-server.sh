#!/bin/bash

echo "Starting the login and dashboard website..."
echo
echo "Searching for Node.js installation..."
echo

# Check if node is in PATH
if command -v node &> /dev/null; then
    echo "Node.js found in PATH"
    echo
    echo "Starting server..."
    node test-server.js
elif [ -f "/usr/local/bin/node" ]; then
    echo "Node.js found at: /usr/local/bin/node"
    echo
    echo "Starting server..."
    /usr/local/bin/node test-server.js
elif [ -f "/usr/bin/node" ]; then
    echo "Node.js found at: /usr/bin/node"
    echo
    echo "Starting server..."
    /usr/bin/node test-server.js
elif [ -f "/opt/nodejs/bin/node" ]; then
    echo "Node.js found at: /opt/nodejs/bin/node"
    echo
    echo "Starting server..."
    /opt/nodejs/bin/node test-server.js
else
    echo "============================================"
    echo "ERROR: Node.js is not installed!"
    echo "============================================"
    echo
    echo "To run this application, you need to install Node.js."
    echo
    echo "Please follow these steps:"
    echo
    echo "1. Download Node.js from: https://nodejs.org/"
    echo
    echo "2. Install Node.js using your package manager:"
    echo "   Ubuntu/Debian: sudo apt update && sudo apt install nodejs npm"
    echo "   CentOS/RHEL:   sudo yum install nodejs npm"
    echo "   macOS:         brew install node"
    echo
    echo "3. After installation, run this script again."
    echo
    echo "Alternatively, you can:"
    echo "- Open the frontend/index.html file directly in your browser"
    echo "  (Note: This will only show the UI without backend functionality)"
    echo
    echo "============================================"
    echo
fi