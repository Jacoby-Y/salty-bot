const config = require('./config.js');

const { Client, GatewayIntentBits, Collection } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
})

// const mongoose = require('./mongoose/mongoose');

const fs = require('fs');

(()=>{ // Set commands from 'cmd' folder
    client.commands = new Collection();
    const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require(`./cmd/${file}`);
        client.commands.set(command.data.name, command);
    }
})()

// (()=>{ // Set buttons from 'btns' folder
//     client.buttons = new Collection();
//     const buttonFiles = fs.readdirSync('./buttons').filter(file => file.endsWith('.js'));

//     for (const file of buttonFiles) {
//         const button = require(`./buttons/${file}`);
//         client.buttons.set(button.data.name, button);
//     }
// })();

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(`Eating brunch with your mom, lol`, { status: 'online', type: 'WATCHING'  });

    // setInterval( async () => {
    //     client.user.setActivity(`${client.guilds.cache.size} Vaults - /help`, { status: 'online', type: 'WATCHING'  })
    // }, 900000);
});

client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'I think I just shat the bed (error occured)' + '```' + `${error}` + '```', ephemeral: true });
        }
    } else if(interaction.isButton()) {
        const button = client.buttons.get(interaction.customId);

        if(!button) return interaction.reply("Your button sucks (This ain't a button)");

        try {
            await button.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Your button sucks (error occured)' + '```' + `${error}` + '```', ephemeral: true });
        }
    }
});

// init();
client.login(`${config.token}`);