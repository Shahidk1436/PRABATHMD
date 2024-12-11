const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;923361937779
var SESSION_ID;PRABATH-MD~KfBF0ZyJ#caUd8vu88s3aA_ZXG8Tcs4R6DmvIzBLDdzpL8CmAK6Q

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}
if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
}else{
SESSION_ID = envv2.SESSION_ID
}




module.exports = {
    SESSION_ID: PRABATH-MD~KfBF0ZyJ#caUd8vu88s3aA_ZXG8Tcs4R6DmvIzBLDdzpL8CmAK6Q,    
    BOT_NUMBER:  923361937779,
    GITHUB_USERNAME: M_shahid1437,
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN,
};
