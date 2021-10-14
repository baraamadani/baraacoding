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

client.login("NzYzNjU4MTgwNzM4Njc4Nzk0.YWgsgw.RWc57EeKYa0Y6uBQQnsH1p0giH0");
