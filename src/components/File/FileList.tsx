export default function FileList(){
    // const { app, Menu } = window.require('electron');
    //const fs = electron.remote.require('fs');
    //const ipcRenderer  = electron.ipcRenderer;

    // const { app, Menu } = require('electron');
    //const isMac = process.platform === 'darwin';

    // const template = [
    //     // { role: 'appMenu' }
    //     ...(isMac ? [{
    //       label: app.name,
    //       submenu: [
    //         { role: 'about' },
    //         { type: 'separator' },
    //         { role: 'services' },
    //         { type: 'separator' },
    //         { role: 'hide' },
    //         { role: 'hideothers' },
    //         { role: 'unhide' },
    //         { type: 'separator' },
    //         { role: 'quit' }
    //       ]
    //     }] : []),
    //     // { role: 'fileMenu' }
    //     {
    //       label: 'File',
    //       submenu: [
    //         isMac ? { role: 'close' } : { role: 'quit' }
    //       ]
    //     },
    //     // { role: 'editMenu' }
    //     {
    //       label: 'Edit',
    //       submenu: [
    //         { role: 'undo' },
    //         { role: 'redo' },
    //         { type: 'separator' },
    //         { role: 'cut' },
    //         { role: 'copy' },
    //         { role: 'paste' },
    //         ...(isMac ? [
    //           { role: 'pasteAndMatchStyle' },
    //           { role: 'delete' },
    //           { role: 'selectAll' },
    //           { type: 'separator' },
    //           {
    //             label: 'Speech',
    //             submenu: [
    //               { role: 'startSpeaking' },
    //               { role: 'stopSpeaking' }
    //             ]
    //           }
    //         ] : [
    //           { role: 'delete' },
    //           { type: 'separator' },
    //           { role: 'selectAll' }
    //         ])
    //       ]
    //     },
    //     // { role: 'viewMenu' }
    //     {
    //       label: 'View',
    //       submenu: [
    //         { role: 'reload' },
    //         { role: 'forceReload' },
    //         { role: 'toggleDevTools' },
    //         { type: 'separator' },
    //         { role: 'resetZoom' },
    //         { role: 'zoomIn' },
    //         { role: 'zoomOut' },
    //         { type: 'separator' },
    //         { role: 'togglefullscreen' }
    //       ]
    //     },
    //     // { role: 'windowMenu' }
    //     {
    //       label: 'Window',
    //       submenu: [
    //         { role: 'minimize' },
    //         { role: 'zoom' },
    //         ...(isMac ? [
    //           { type: 'separator' },
    //           { role: 'front' },
    //           { type: 'separator' },
    //           { role: 'window' }
    //         ] : [
    //           { role: 'close' }
    //         ])
    //       ]
    //     },
    //     {
    //       role: 'help',
    //       submenu: [
    //         {
    //           label: 'Learn More',
    //           click: async () => {
    //             const { shell } = require('electron')
    //             await shell.openExternal('https://electronjs.org')
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // const template : any = [];
    // const menu = Menu.buildFromTemplate(template);
    // Menu.setApplicationMenu(menu);
    // const fs = require('fs')
    // const root = fs.readdirSync('D:/temp/tandem');

    // const electron = window.electron;
    // const fs = electron.remote.fs;
    // const ipcRenderer  = electron.ipcRenderer; 

    // ipcRenderer.send('',{});
    // console.log(shell);
    //shell.openExternal('https://electronjs.org').then((data)=>{console.log(data);});
   // read();
   
//    const electron = window.require("electron")
//   const electron = window.require("electron");
   
    //   ipcRenderer.send('ipc-req', '');
//    console.log('a', window.isElectron);
//    if (window.isElectron) {
//     console.log('a', window.ipcRenderer);
//     window.ipcRenderer.on('pong', (event, arg) => {
//         //this.setState({ipc: true})
//     })
    // window.ipcRenderer = require('electron').ipcRenderer;
        // ipcRenderer.send('ping')
// }
    

    read();
   
    return (
        <div>Local File list</div>
    );
}

// function getLocalFiles() {
//     const {app, BrowserWindow} = require('electron')
//     const path = require('path')
//     const fs = require('fs')

//     // console.log('node api test ', fs)
// }



// declare global {
//     interface Window {
//       ipcRenderer: IpcRenderer
//     }
//   }



// function read() { 
  
//     let values = [];
//     console.log(path.resolve(__dirname, './files/test1.txt'));
//     fs.readFile(
//       path.resolve(__dirname, './files/test1.txt'),'utf-8',      (err : any, data: any) => {
//         if (err) throw err;
//         values = data.toString().split('\n');
//         console.log(values)
//         //const listItems = values.map(val => <p>{val}</p>);
//         return [];
//       }
//     );
//   }


function read() { 
    const fs = window.require('fs');
    const path = window.require('path');

    let values = [];
    console.log(path.resolve(__dirname, './files/test1.txt'));
    fs.readFile(
      path.resolve(__dirname, './files/test1.txt'),'utf-8',      (err : any, data: any) => {
        if (err) throw err;
        values = data.toString().split('\n');
        console.log(values)
        //const listItems = values.map(val => <p>{val}</p>);
        return [];
      }
    );
  }