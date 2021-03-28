
// import { ipcRenderer, IpcRenderer } from 'electron';

// declare global {
//   namespace NodeJS {
//     interface Global {
//       ipcRenderer: IpcRenderer
//     }
//   }
// }

// // Since we disabled nodeIntegration we can reintroduce
// // needed node functionality here
// process.once('loaded', () => {
//   global.ipcRenderer = ipcRenderer
// })

window.ipcRenderer = require('electron').ipcRenderer;
window.fs = require('fs');
window.path = require('path')

window.require = require;
