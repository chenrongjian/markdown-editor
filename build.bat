@echo off
set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
set ELECTRON_CUSTOM_DIR=v19.0.8
cd /d %~dp0
npm run electron:build 