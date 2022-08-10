const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const config = require('./config.js');

const commands = [];
const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '710867565349699667';

/* Guilds
	Coby's Bots: 772606187384471594
	Salty Falls: 450096954446184451
*/

const guildId = '450096954446184451';

for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(config.token);

(async () => {
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
})();