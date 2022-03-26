const Discord = require("discord.js") // livraria

module.exports =  {
    name: "ping", 
    description: "Veja meu ping.", 
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {

        let don = new Discord.MessageEmbed() 
        .setColor("#36393e") // Cor invisivel
        .setDescription(`Meu ping atual encontra-se em \`${client.ws.ping}ms\`.`);

        interaction.reply({ embeds: [don], ephemeral: true })

    } 
} 
