const commando = require('discord.js-commando');
const YTDL = requrie('ytdl-core');

class JoinChannelCommand extends commando.command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'joins the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)  
            {
                var servers = servers[message.guild.id]
                message.member.voiceChannel.join()
                .then(connection => {
                    message.reply("Odaya katıldı!") 
                })
            }
        }
        else{
            message.reply("Odaya katılırken bir hata meydana geldi!")
        }
    }
}

module.exports = JoinChannelCommand;