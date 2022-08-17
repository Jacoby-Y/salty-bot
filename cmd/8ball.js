const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
// const mongoose = require("mongoose");
// const UserSave = require('../models/userSchema');
// const { fNum } = require("../utils/numbers.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eightball')
		.setDescription('Ask something like: "Should I rob that bank?"')
        .addStringOption(i => i.setName("question").setDescription("Ask away").setRequired(true)),
	async execute(interaction) {

        let question = interaction.options.getString("question");

        const answers = [
            "Mmmm... perhaps",
            "Nah",
            "Ohhh yeaaah",
            "Cringe moment",
            "Anyway, y'all seen the new season of Stranger Things?",
            "Become a dark spirit",
            "Crab time",
            "That's a good question!",
            "Didn't ask",
            "Literally nobody asked, lol",
        ]

        // Snatched from a demo
        let embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle('Eight Ball')
            // .setURL('https://discord.js.org/')
            // .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            // .setDescription("You'd be sooo cringe if you did that, lol.")
            // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            // .addFields(
            //     { name: 'Regular field title', value: 'Some value here' },
            //     { name: '\u200B', value: '\u200B' },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            // )
            .addFields(
                { name: 'Your question', value: `${question}` },
                { name: 'My answer', value: answers[Math.floor(Math.random() * answers.length)] },
            )
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            // .setFooter({ text: '/help for more commands' });

        await interaction.reply({ embeds: [embed] });
	},
};