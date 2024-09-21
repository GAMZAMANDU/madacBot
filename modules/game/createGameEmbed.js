const { EmbedBuilder } = require('discord.js');

function createGameEmbed(gameType, people) {
    return new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('게임 시작!')
        .setDescription(`${gameType}\n레벨: ${people}`)
        .setFooter({ text: '행운을 빕니다!' })
        .setTimestamp();
}

module.exports = { createGameEmbed };
