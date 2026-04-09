@echo off
echo Starting the login and dashboard website...
echo.
echo Searching for Node.js installation...
echo.

REM Check for node in common installation paths
set NODE_FOUND=0

if exist "C:\Program Files\nodejs\node.exe" (
    set NODE_PATH=C:\Program Files\nodejs\node.exe
    set NODE_FOUND=1
)

if exist "C:\Program Files (x86)\nodejs\node.exe" (
    set NODE_PATH=C:\Program Files (x86)\nodejs\node.exe
    set NODE_FOUND=1
)

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    set NODE_PATH=%LOCALAPPDATA%\Programs\nodejs\node.exe
    set NODE_FOUND=1
)

if %NODE_FOUND%==1 (
    echo Node.js found at: %NODE_PATH%
    echo.
    echo Starting server...
    "%NODE_PATH%" test-server.js
) else (
    echo ============================================
    echo ERROR: Node.js is not installed!
    echo ============================================
    echo.
    echo To run this application, you need to install Node.js.
    echo.
    echo Please follow these steps:
    echo.
    echo 1. Download Node.js from: https://nodejs.org/
    echo.
    echo 2. Run the downloaded installer and follow the setup wizard.
    echo.
    echo 3. After installation, restart this batch file.
    echo.
    echo Alternatively, you can:
    echo - Open the frontend/index.html file directly in your browser
    echo   (Note: This will only show the UI without backend functionality)
    echo.
    echo ============================================
    echo.
    pause
)