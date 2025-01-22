@echo off
echo Cleaning up processes...
taskkill /F /IM electron.exe 2>nul
taskkill /F /IM "Markdown Editor.exe" 2>nul
taskkill /F /IM electron-builder.exe 2>nul

echo Cleaning up files...
if exist "electron-dist" (
    rd /s /q "electron-dist"
)
if exist "dist" (
    rd /s /q "dist"
)
if exist "electron\dist" (
    rd /s /q "electron\dist"
)

echo Clean up completed.
exit /b 0 