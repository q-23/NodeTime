var os = require('os');
var colors = require('colors');
var time = require('./Time');
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.red, type);
    console.log('Release:'.blue, release);
    console.log('CPU model:'.trap, cpu);
    console.log('Uptime: ~'.random, time.print());
    console.log('User name:'.zebra, userInfo.username);
    console.log('Home dir:'.green, userInfo.homedir);
}

exports.print = getOSinfo;