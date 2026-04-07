const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Commands we want
const commands = [
  new SlashCommandBuilder()
    .setName("tpa")
    .setDescription("toilet paper awesome")
    .toJSON()
];

// Register slash commands instantly on startup
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID), // put your Application ID here in Render secrets
      { body: commands }
    );
    console.log("Slash command registered!");
  } catch (err) {
    console.error("Failed to register commands:", err);
  }
})();

client.once("ready", () => {
  console.log("TPA bot is online!");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "tpa") {
    await interaction.reply(`toilet paper awesome
toilet paper awesome`);
  }
});

client.login(process.env.DISCORD_TOKEN);
