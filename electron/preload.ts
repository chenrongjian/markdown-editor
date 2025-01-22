// @ts-nocheck
const { contextBridge } = require('electron')
const processNode = require('process')

contextBridge.exposeInMainWorld('electron', {
  isElectron: true,
  resourcesPath: processNode.resourcesPath
}) 