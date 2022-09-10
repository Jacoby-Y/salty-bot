require("dotenv").config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));
const commands = [];

// Place your client and guild ids here
const clientId = '710867565349699667';

for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	commands.push(command.data.toJSON());
}

const applyCommands = async (guildId)=>{
	const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
	
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
}

// /* Coby's Bots */ applyCommands("772606187384471594");
/* Salty Falls */ applyCommands("450096954446184451");