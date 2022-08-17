const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
// const mongoose = require("mongoose");
// const UserSave = require('../models/userSchema');
// const { fNum } = require("../utils/numbers.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bozo')
		.setDescription("Will randomly state whether you're a bozo or not"),
	async execute(interaction) {
        // Snatched from a demo
        const title = (Math.random() < 0.5 ? "You're *not* a bozo" : "You *are* a bozo");

        let embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle(title)
            // .setTimestamp()
            // .setFooter({ text: '/help for more commands' });

        await interaction.reply({ embeds: [embed] });
	},
};