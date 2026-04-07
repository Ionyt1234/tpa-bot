const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("tpa")
    .setDescription("toilet paper awesome")
    .toJSON()
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands("1491072617615196302"),
      { body: commands }
    );

    console.log("Slash command registered!");
  } catch (error) {
    console.error(error);
  }
})();
