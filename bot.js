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

client.login('mfa.AQ8zwT_WhAp_q1Nrdesdpjw6EjejZDaWZJWltFIbIufh34fHfTgiWhiFD6yGtWPwAe_23duvn3SIxgCvksUw');
