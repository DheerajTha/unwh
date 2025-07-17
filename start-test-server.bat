@echo off
echo ========================================
echo UNWH Website Component System Test
echo ========================================
echo.
echo Starting local test server...
echo.

REM Try Python 3 first, then Python
python test-server.py 2>nul || python3 test-server.py 2>nul || (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3 to run the test server
    echo.
    echo Alternative: Open the HTML files directly in your browser
    echo - contact-updated.html (working example)
    echo - index-with-components.html (index example)
    echo.
    pause
    exit /b 1
)

pause