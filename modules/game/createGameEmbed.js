const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

function createGameEmbedAndButtons(gameType, people) {
    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('게임 시작!')
        .setDescription(`${gameType}\n레벨: ${people}`)
        .setFooter({ text: '행운을 빕니다!' })
        .setTimestamp();

    const joinButton = new ButtonBuilder()
        .setCustomId('join_game')
        .setLabel('게임 참가')
        .setStyle(ButtonStyle.Primary);

    const leaveButton = new ButtonBuilder()
        .setCustomId('leave_game')
        .setLabel('게임 나가기')
        .setStyle(ButtonStyle.Secondary);

    const actionRow = new ActionRowBuilder()
        .addComponents(joinButton, leaveButton);

    return { embed, actionRow }; // 임베드와 액션 로우 반환
}

module.exports = { createGameEmbedAndButtons };
