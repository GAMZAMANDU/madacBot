const { Client, GatewayIntentBits, Events } = require('discord.js');
const config = require('./config.json');
const { createGameEmbedAndButtons } = require('./modules/game/createGameEmbed.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

client.once(Events.ClientReady, () => {
    console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isCommand()) {
        const { commandName } = interaction;

        if (commandName === 'ping') {
            await interaction.reply('Pong!');
        }

        if (commandName === 'game') {
            const gameType = interaction.options.getString('type'); 
            const people = interaction.options.getInteger('people') || 4; 

            const { embed, actionRow } = createGameEmbedAndButtons(gameType, people);

            await interaction.reply({ embeds: [embed], components: [actionRow] });
        }
    } else if (interaction.isButton()) {
        const { customId } = interaction;

        if (customId === 'join_game') {
            await interaction.reply(`${interaction.user.username}님이 게임에 참가했습니다!`);
        } else if (customId === 'leave_game') {
            await interaction.reply(`${interaction.user.username}님이 게임에서 나갔습니다!`);
        }
    }
});

client.login(config.token);
