@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 serve.py
  goto end
)
where python >nul 2>nul
if %errorlevel%==0 (
  python serve.py
  goto end
)
where node >nul 2>nul
if %errorlevel%==0 (
  node serve.mjs
  goto end
)
echo Instaleaza Python 3 sau Node.js si porneste din nou acest fisier.
:end
pause
