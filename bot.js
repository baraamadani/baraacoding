const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome, made by Anv!`);
  client.user.setPresence({
status: 'online',
game: {
  name: 'You',
  type: 'WATCHING',
  url: 'https://www.twitch.com/h-m'
}
  });
});

client.login('NjI5MDQzNDI2Mjk3NjQzMDA5.Xe6rFg.wuewR_DUeUL-f0XPqTxIJ3x-mVI');