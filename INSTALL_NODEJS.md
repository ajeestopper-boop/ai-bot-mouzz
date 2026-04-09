# How to Install Node.js and Run the Application

## Step 1: Download Node.js

1. Open your web browser
2. Go to https://nodejs.org/
3. Click the **"Download Node.js"** button (choose the LTS version)
4. Save the installer file to your computer

## Step 2: Install Node.js

### For Windows:
1. Run the downloaded `.msi` installer file
2. Click "Next" through the installation wizard
3. Accept the license agreement
4. Choose the installation location (default is fine)
5. Click "Install"
6. Wait for the installation to complete
7. Click "Finish"

### For macOS:
1. Run the downloaded `.pkg` installer file
2. Follow the installation wizard
3. Click "Continue" and "Install" as prompted
4. Enter your Mac password if requested
5. Wait for the installation to complete

### For Linux:
1. Open Terminal
2. Run the appropriate command for your distribution:
   - **Ubuntu/Debian:**
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```
   - **CentOS/RHEL:**
     ```bash
     sudo yum install nodejs npm
     ```
   - **Fedora:**
     ```bash
     sudo dnf install nodejs npm
     ```

## Step 3: Verify Installation

1. Open a **new** terminal or command prompt window
2. Type the following command to check if Node.js is installed:
   ```bash
   node --version
   ```
3. You should see a version number like `v18.16.0` or similar

## Step 4: Run the Application

### Option A: Using the Startup Script (Easiest)

**Windows:**
1. Navigate to the project folder
2. Double-click `start-server.bat`
3. The server will start automatically

**macOS/Linux:**
1. Open Terminal
2. Navigate to the project folder
3. Make the script executable:
   ```bash
   chmod +x start-server.sh
   ```
4. Run the script:
   ```bash
   ./start-server.sh
   ```

### Option B: Manual Start

1. Open terminal or command prompt
2. Navigate to the project folder:
   ```bash
   cd path/to/ai-website-generator
   ```
3. Run the test server:
   ```bash
   node test-server.js
   ```
4. You should see:
   ```
   Test server running on http://localhost:3000
   You can now open your browser and go to http://localhost:3000
   The application is ready to use!
   ```

## Step 5: Open the Application

1. Open your web browser (Chrome, Firefox, Safari, Edge, etc.)
2. Type in the address bar: `http://localhost:3000`
3. You should see the login page

## Troubleshooting

### "node is not recognized" on Windows

If you get this error after installing Node.js:

1. **Restart your computer** - This is important!
2. After restarting, open a new command prompt
3. Try running `node --version` again
4. If still not working, try these steps:

   a. Press `Windows Key + R`
   b. Type `sysdm.cpl` and press Enter
   c. Click "Advanced" tab
   d. Click "Environment Variables"
   e. Under "System variables", find and select "Path"
   f. Click "Edit"
   g. Click "New" and add: `C:\Program Files\nodejs\`
   h. Click "OK" on all windows
   i. Restart your computer

### Port Already in Use

If you see an error about port 3000 being in use:

1. Close any other applications that might be using port 3000
2. Or, edit `test-server.js` and change line:
   ```javascript
   const PORT = process.env.PORT || 3000;
   ```
   to:
   ```javascript
   const PORT = process.env.PORT || 3001;
   ```
3. Then run the server again and open `http://localhost:3001` in your browser

### Browser Issues

If the page doesn't load:

1. Make sure the server is running (you should see the message in terminal)
2. Check that you typed `http://localhost:3000` correctly (not `https://`)
3. Try a different browser
4. Clear your browser cache

## Next Steps

Once the application is running:

1. **Register a new account:**
   - Fill in the registration form with a username, email, and password
   - Click "Sign Up"

2. **Login:**
   - Use your username and password to login
   - You'll be redirected to the dashboard

3. **Explore the dashboard:**
   - View statistics
   - Check your profile
   - Manage settings

## Need More Help?

If you're still having issues:

1. Make sure you've followed all steps exactly
2. Try restarting your computer after installing Node.js
3. Check that you're using the latest version of Node.js from nodejs.org
4. Make sure your firewall or antivirus isn't blocking the application