const nativefier = require('nativefier').default;
const path = require('path');
const isDarwin = process.platform === 'darwin';

const width = 900;
const height = 560;

const options = {
    name: 'Pandora',
    targetUrl: 'https://www.pandora.com',
    electronVersion: '2.0.12',
    overwrite: true,
    icon: path.join(__dirname, 'pandora_favicon_144.png'),
    singleInstance: true,
    width,
    height,
    minWidth: width,
    minHeight: height,
    titleBarStyle: 'hiddenInset',
    inject: [].concat(isDarwin ? [path.join(__dirname, 'site.css')] : [])
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});