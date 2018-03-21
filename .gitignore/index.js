const Discord = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = 'd!';

bot.on('ready', function(){
    bot.user.setGame("d!help | DouZii")
    console.log("Connecté");
});

bot.login(process.env.TOKEN);




bot.on('message', message => {
    if ('guildMemberAdd', member => {
        member.createDM().then(channel => {
            return message.channel.send('__**Bienvenue**__ sur le serveur! **Amuse toi bien!** ' + member.displayName)
        }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
    });

    if(message.content.startsWith( prefix + 'help')) {
    const embed = new Discord.RichEmbed()
      .setColor('#21F600')
      .setAuthor("Help")
      .setTitle("__Voici la page d'aide de DouZii__")
      .setThumbnail(message.author.avatarURL)
      .setDescription("**DIVERS** : \n" +
          " `*support` : *Te donne le serveur de mon créateur* :white_check_mark:\n" +
          " `*invit` : *Te donne le lien pour minviter sur ton serveur* :white_check_mark:\n" +
          "**MODERATION** : \n" +
          " `*kick (@user)` : *Pour kick un joueur*:white_check_mark:\n" +
          "`*bug` : *Pour signaler un beug a mon créateur*:x:\n" +
          "`*ban (@user)` : *Pour ban une personne*:white_check_mark:\n" +
          "**FUN** : \n" +
          "`d!ping` : *Pour voir le ping*:white_check_mark:\n" +
          "`*say` : *Pour faire dire des phrases au bot*:white_check_mark:\n" +
          "`*date` : *Te dit quel jour nous somme*:x:\n" + 
          "`*avatar` : *Te donne ton avatar*:white_check_mark:\n" + 
          "`*ui(@user)` : *Te donne le profil de la personne mentionnée*:white_check_mark:\n" + 
          "**A VENIR** \n" + 
          "`*afk (raison)` : *Pour te mettre afk*:x:\n" + 
          "`*meteo` : *Pour savoir la meteo d'aujourd'hui*:x:\n" + 
          "`*mute/unmute (raison)` : *Pour mute/unmute quelqu'un*:x:\n" +
          "`*wiki` : *Pour faire une recherche sur wikipédia*:x:\n" +
          "`*google` : *Pour faire une recherche sur google*:x:\n")
    message.author.send({embed});
    message.reply(":point_right:help envoyé en MP:envelope_with_arrow:");
}

if (message.content.startsWith( prefix + "kick")) {
    // Easy way to get member object though mentions.
    var member= message.mentions.members.first();
    // kick
    member.kick().then((member) => {
        // Successmessage
        message.channel.send(":wave: " + member.displayName + " **a été kick** :point_right: ");
}).catch(() => {
        // Failmessage
        message.channel.send(":x: **Erreur : Vous n'avez pas les permissions !**");
});

if (message.content.startsWith( prefix + "ban")) {
// Easy way to get member object though mentions.
var member= message.mentions.members.first();
// ban
member.ban().then((member) => {
    // Successmessage
    message.channel.send(":wave: " + member.displayName + " **a été ban** :point_right: ");
}).catch(() => {
    // Failmessage
    message.channel.send(":x: **Erreur : Vous n'avez pas les permissions !**");
})}}})

if(message.content.startsWith( prefix + "purge")) {
    let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
    let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires

    if (!myrole) {
        return message.author.send(":no_entry:**Je n'ai pas les permissions nécessaires pour effacer un/des message(s)**");
    }

    if (!yourole) {
        return message.author.send(":no_entry:**Vous n'avez pas les permissions nécessaires**");
    }

    var suppression = message.content.substr(8);
    if (suppression < 2 || suppression > 101) {
        return message.reply(":warning:**La valeur que vous avez entré est invalide, merci de choisir une valeur comprise entre 2 et 100**");
    }
    message.channel.bulkDelete(suppression, true).then(ok => {
        message.channel.send("Suppression de " + "" + suppression + "" + " messages")
        .then(message => setTimeout(function(){message.delete()}, 1000))
        .catch(err => console.log(err));

if (message.content.startsWith( prefix + "say")) {
    var msg = message.content.substr('4')
    message.delete(message.author);
    message.channel.send(msg);
}

if (message.content.startsWith( prefix + "setgame")) {
    if (message.author.id != '307919815547551745') {message.reply("**Il n'y a que Mon créateur qui peut l'utilisée!**")
    } else {
        var game = message.content.substr(10);
        message.delete(message.author)
        client.user.setPresence({game: {name : game, type :0}});
        return message.channel.send('**Le** `joue à...` **du bot a été défini**.')
    }}

    if (message.content.startsWith ( prefix + 'support')) {
        message.channel.send('**Voici le serveur discord de mon créateur : https://discord.gg/FR4KZrT**')
    }

    if (message.content.startsWith ( prefix + 'invit')) {
        message.channel.send("**Pour m ajouter à ton server :)  | **https://discordapp.com/oauth2/authorize?client_id=419142627087089695&scope=bot&permissions=2146958591")
    }

    if (message.content.startsWith( prefix + "avatar")){
        message.channel.send(message.author.avatarURL);
}

if (message.content.startsWith( prefix + "ui")) {
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let member = message.guild.member(user);
    let roles = [];
    if (member.roles.size > 0) {
        member.roles.forEach(r => {
            if(
        !r.name.includes("everyone")
    )
        {
            roles.push(r.name);
        }
    })
    } else {
        roles = "no";
    }
    let ttt = (member.roles.size > 0) ? roles.length : "0";
    let wato = (roles.length > 0) ? roles.join(", ") : "None";
    let game = (!!user.presence && user.presence !== null && user.presence.game !== null && user.presence.game.name !== null) ? user.presence.game.name : "Nothing"
    let embed = {
        author: {
            name: "userinfo: " + user.username,
            icon_url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
        },
        color: 0x47D70C,
        thumbnail: {
            url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
        },
        fields: [{
            name: "Utilisateur",
            value: user.username + "#" + user.discriminator,
            inline: true
        }, {
            name: "ID",
            value: user.id,
            inline: true
        }, {
            name: "Pseudo",
            value: (member.nickname !== null) ? member.nickname : user.username,
            inline: true
        }, {
            name: "Jeux",
            value: "Joue a : " + game,
            inline: true
        }, {
            name: "Status",
            value: (user.presence !== null && user.presence.status !== null) ? user.presence.status : "Offline",
            inline: true
        }, {
            name: "Rejoins Le",
            value: member.joinedAt.toString(),
            inline: true
        }, {
            name: "Compte Crée Le",
            value: user.createdAt,
            inline: true
        }, {
            name: "Roles (" + ttt + ")",
            value: wato,
            inline: true
        }]
    }
    message.channel.send("", {
        embed
    });
}

if (message.content.startsWith( prefix + "ping")) {
    var now = require('performance-now');
    var startTime = now();
    message.channel.send("**pong = calcul...**")
        .then(message => {
        var endTime = now();
    message.edit("**pong :ping_pong: = " + Math.round(endTime - startTime) + " ms.**");
}).
    catch(console.error);
}

})}
