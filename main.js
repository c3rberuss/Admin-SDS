const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/Admin-SDS2018/assets/logo.png`,
        minWidth: 300,
        minHeight: 300
    });


    win.loadURL(`file://${__dirname}/dist/Admin-SDS2018/index.html`);
    //win.loadURL(`http://localhost:4200/`);

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow();
    }
});