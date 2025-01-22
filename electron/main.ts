/// <reference types="node" />
/// <reference types="electron" />

// @ts-nocheck
const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')
const processNode = require('process')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      // 添加预加载脚本
      webviewTag: true,
      devTools: !app.isPackaged // 只在开发环境启用开发者工具
    }
  })

  if (app.isPackaged) {
    const appPath = path.join(processNode.resourcesPath, 'app', 'index.html')
    console.log('App path:', appPath)
    
    try {
      if (!fs.existsSync(appPath)) {
        console.error('Error: index.html not found at:', appPath)
        const resourcesDir = path.join(processNode.resourcesPath, 'app')
        console.log('Resources directory contents:', fs.readdirSync(resourcesDir))
        app.quit()
        return
      }

      // 设置基础URL
      win.loadFile(appPath, {
        hash: '/',
        search: `timestamp=${Date.now()}`
      }).catch((error: Error) => {
        console.error('Failed to load file:', error)
      })

      // 监听资源加载错误
      win.webContents.session.webRequest.onErrorOccurred((details) => {
        console.log('Resource load error:', details.url, details.error)
      })

    } catch (error: unknown) {
      console.error('Error loading app:', error)
      app.quit()
    }
  } else {
    win.loadURL('http://localhost:5173')
    // 只在开发环境打开开发者工具
    win.webContents.openDevTools()
  }

  // 添加错误处理
  win.webContents.on('did-fail-load', (
    event: Electron.Event,
    errorCode: number,
    errorDescription: string
  ) => {
    console.error('Failed to load:', errorCode, errorDescription)
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (processNode.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) 