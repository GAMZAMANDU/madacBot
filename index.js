const { Client, GatewayIntentBits, Events } = require('discord.js');
const config = require('./config.json');
const { createGameEmbed } = require('./modules/game/createGameEmbed');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

client.once(Events.ClientReady, () => {
    console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }

    if (commandName === 'game') {
        const gameType = interaction.options.getString('type'); 
        const people = interaction.options.getInteger('people') || 4; 

        const embed = createGameEmbed(gameType, people);

        await interaction.reply({ embeds: [embed] });
    }
});

client.login(config.token);
