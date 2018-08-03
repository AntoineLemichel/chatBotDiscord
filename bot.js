const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDc0ODgyNTI5NzI4Mzk3MzI2.DkYOVg.N3fnGO7y3tmhDQbdygpH9XSwvq8');