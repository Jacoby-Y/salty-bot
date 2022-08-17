const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
// const mongoose = require("mongoose");
// const UserSave = require('../models/userSchema');
// const { fNum } = require("../utils/numbers.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bozo')
		.setDescription('Bozo moment'),
	async execute(interaction) {
        // Snatched from a demo
        let embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("You're a *bozo*")
            .setTimestamp()
            // .setFooter({ text: '/help for more commands' });

        await interaction.reply({ embeds: [embed] });
	},
};