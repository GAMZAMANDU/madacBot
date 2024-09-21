// deploy-commands.js
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json'); // config에서 토큰과 클라이언트 ID 불러오기

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },

    {
      name: 'game',
      description: 'Play a game with specified options.',
      options: [
          {
              name: 'type',
              type: 3, // STRING 타입
              description: 'MafiaCard',
              required: true,
          },
          {
              name: 'people',
              type: 4, // INTEGER 타입
              description: '인원수',
              required: false,
          },
      ],
  },
];

const rest = new REST({ version: '9' }).setToken(config.token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(config.clientId), // clientId도 config에 추가
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
