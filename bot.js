const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!help') {
        msg.reply('Voici une liste de commande ("à compléter") : \n!html5 Affiche une liste de certaines commandes HTML afin d\'affiner votre recherche.');
    }
    if (msg.content === '!html5') {
        msg.reply('!html5 : Vous affiche toutes les commandes liés à HTML5.\n \
        !html5-base : Affiche toutes les balises basique que peut comporter un document HTML5. \n \
        ');
    }
    if (msg.content === '!html-base') {
        msg.reply('<!DOCTYPE html> : Permet de dire à votre navigateur qu\'il est actuellement sur une page écrite en HTML5. \n \
        <html></html> : Balise principale de la page HTML. \n \
        <head></head> : En tête de la page \n \
        <body></body> : Corps de la page. C\'est ici le contenu principale de votre page.');
    }
});

client.login('NDc0ODgyNTI5NzI4Mzk3MzI2.DkYOVg.N3fnGO7y3tmhDQbdygpH9XSwvq8');