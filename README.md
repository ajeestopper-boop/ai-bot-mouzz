# AI Website Generator

A powerful web application that generates complete websites from natural language descriptions using AI.

## 🚀 Features

- **Natural Language Input**: Describe what you want to build in plain English
- **AI-Powered Generation**: Uses OpenAI API to generate complete websites
- **Complete Websites**: Generates HTML, CSS, and JavaScript in one file
- **Multiple Types**: Supports various website types (login systems, dashboards, portfolios, etc.)
- **Download & Copy**: Easy download and copy functionality
- **Beginner Friendly**: Clean, well-commented code

## 🛠️ Technologies Used

- **Backend**: Node.js + Express
- **Frontend**: HTML, CSS, JavaScript
- **AI Integration**: OpenAI API (GPT-3.5/GPT-4)
- **Styling**: CSS Grid, Flexbox, modern gradients

## 📦 Installation

### Prerequisites

1. **Node.js** (version 14 or higher)
   - Download from: https://nodejs.org/
   - Or install via package manager:
     ```bash
     # Windows (using Chocolatey)
     choco install nodejs
     
     # macOS (using Homebrew)
     brew install node
     
     # Ubuntu/Debian
     sudo apt update && sudo apt install nodejs npm
     ```

2. **API Key** (Required for AI features)
   - Get a free API key from [OpenAI](https://platform.openai.com/api-keys)
   - Or use any compatible AI API

### Setup Instructions

1. **Clone or download** this project to your computer

2. **Install dependencies** (optional, only if using npm):
   ```bash
   npm install
   ```

3. **Configure API Key**:
   - Open `backend/server.js` in a text editor
   - Find line: `const API_KEY = "YOUR_API_KEY_HERE";`
   - Replace `"YOUR_API_KEY_HERE"` with your actual API key
   - Save the file

4. **Start the server**:

   **Option 1: Using npm (Recommended)**
   ```bash
   node backend/server.js
   ```

   **Option 2: Without npm (Test Server)**
   ```bash
   node test-server.js
   ```

   **Option 3: Easy startup**
   - **Windows**: Double-click `start-server.bat`
   - **macOS/Linux**: Run `./start-server.sh`

5. **Open your browser** and go to: http://localhost:3000

## 🎯 Usage

### Basic Usage

1. **Type your description** in the input box:
   - "Create a food delivery website"
   - "Build a student login system"
   - "Make a portfolio website"
   - "Generate a blog platform"

2. **Click "Generate Website"**

3. **View the results**:
   - Generated HTML code
   - Website description
   - Usage instructions

4. **Download or copy** the generated code

### Example Commands

Try these sample commands:

- `create a food delivery website`
- `build a student login system`
- `make a portfolio website`
- `generate a blog platform`
- `create an admin dashboard`
- `build a simple e-commerce site`
- `create a weather app`
- `make a todo list application`

## 🔧 Configuration

### API Key Setup

1. **Get your API key**:
   - Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
   - Create an account if you don't have one
   - Generate a new API key

2. **Update the server**:
   ```javascript
   // In backend/server.js, line 12
   const API_KEY = "YOUR_API_KEY_HERE"; // ← Replace this
   
   // Change to:
   const API_KEY = "sk-your-actual-api-key-here";
   ```

3. **Alternative APIs**:
   - Uncomment the Hugging Face API lines if you prefer
   - Update the API URL and headers accordingly

### Server Configuration

- **Port**: Default is 3000 (change in `const PORT = process.env.PORT || 3000;`)
- **Model**: Default is `gpt-3.5-turbo` (change to `gpt-4` if available)
- **Max Tokens**: Default is 3000 (adjust based on your needs)

## 📁 Project Structure

```
ai-website-generator/
├── backend/
│   ├── server.js          # Main server with AI integration
│   ├── routes/
│   │   └── auth.js        # Authentication routes
│   ├── middleware/
│   │   └── auth.js        # Auth middleware
│   └── config/
│       └── db.js          # Database configuration
├── frontend/
│   ├── index.html         # Main AI generator interface
│   ├── script.js          # Frontend JavaScript
│   ├── styles.css         # CSS styling
│   └── dashboard.html     # Dashboard page
├── test-server.js         # Standalone server (no dependencies)
├── start-server.bat       # Windows startup script
├── start-server.sh        # Linux/macOS startup script
├── package.json           # Project dependencies
└── README.md             # This file
```

## 🚨 Troubleshooting

### Common Issues

1. **"node is not recognized"**
   - Install Node.js from https://nodejs.org/
   - Restart your terminal/command prompt

2. **"API key required"**
   - Make sure you've replaced `YOUR_API_KEY_HERE` in `backend/server.js`
   - Check that your API key is valid

3. **"Port already in use"**
   - Change the port number in `backend/server.js`
   - Or stop other applications using port 3000

4. **"Network error"**
   - Check your internet connection
   - Verify your API key has sufficient credits
   - Check OpenAI API status

### Error Messages

- **"Failed to generate website"**: Check API key and internet connection
- **"Invalid API key"**: Verify your API key is correct
- **"Rate limit exceeded"**: Wait a moment and try again
- **"Model not found"**: Check if you have access to the specified model

## 💡 Tips

1. **Be specific**: The more detailed your description, the better the result
2. **Start simple**: Begin with basic descriptions and get more complex
3. **Test locally**: Always test generated websites in your browser
4. **Customize**: Generated code is a starting point - feel free to modify it

## 🔒 Security

- **API Key**: Never share your API key
- **Environment Variables**: Consider using `.env` files for production
- **CORS**: CORS is enabled for development - restrict in production

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Support

If you encounter issues or have questions:

1. Check the troubleshooting section above
2. Review the error messages carefully
3. Ensure your API key is valid and has sufficient credits
4. Check your internet connection
5. Verify Node.js is properly installed

## 📞 Contact

For support or questions:
- Create an issue on GitHub
- Check the OpenAI API documentation
- Review the code comments for guidance

---

**Happy Website Building! 🎉**