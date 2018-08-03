const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('Voici une liste de commande (à compléter) : \n!html \t Affiche une liste de certaines commandes HTML afin d\'affiner votre recherche.\n');
  }
  if(msg.content === '!html'){
      msg.reply('!html5 :\t Vous affiche toutes les commandes liés à HTML5.\n');
    //   msg.reply("!html5-Link: \t Affiche toutes les link différent.");
  }
});

client.login('NDc0ODgyNTI5NzI4Mzk3MzI2.DkYOVg.N3fnGO7y3tmhDQbdygpH9XSwvq8');