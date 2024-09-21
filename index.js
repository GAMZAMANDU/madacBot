const Discord = require('discord.js');
const config = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // 서버 관련 이벤트
        GatewayIntentBits.GuildMessages, // 메시지 이벤트
        GatewayIntentBits.MessageContent // 메시지 내용 이벤트 (필요한 경우)
    ]
});
const token = config.token

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);
