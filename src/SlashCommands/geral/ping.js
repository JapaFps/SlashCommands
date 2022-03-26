const Discord = require("discord.js") // livraria

module.exports =  {
    name: "ping", // Nome do comando... lembre-se de deixar esse mesmo nome no arquivo.js
    description: "Veja meu ping.", // Descrição que irá aparecer quando o comando / for executado 
    type: "CHAT_INPUT", // Comandos de Slash; um comando baseado em texto que aparece quando um usuário digita /
    
    run: async (client, interaction, args) => { // definindo o client para puxar o ping do bot... isso pode ser alterado por bot dependendo da sua index | interação para puxar a interação | args pros argumentos

        let don = new Discord.MessageEmbed() // Devindo a embed com a livraria discord.js | você pode usar tbm const { MessageEmbed } = require("discord.js") para puxar maus facil 
        .setColor("#36393e") // Cor invisivel
        .setDescription(`Meu ping atual encontra-se em \`${client.ws.ping}ms\`.`); // Descrição do comando

        interaction.reply({ embeds: [don], ephemeral: true }) // ephemeral: true | utilizado para a pessoa que executou o comando seja a unica a velo

    } // feixando o run
} // feixando o mudule exports
