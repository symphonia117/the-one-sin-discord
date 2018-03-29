//declare const
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

//declare global variable
var p = config.prefix;

//spin up message
client.on("ready", () => {
  console.log("I'm ready!");
});

client.on("message", (message) => {
  if (message.content === p + "ping") {
    message.channel.send("pong!");
  }

  else{

	  	if(message.author.bot) return;
	  	let messageArray = message.content.split(" ");
	  	let command = messageArray.shift().toLowerCase();

	 	//console.log(command);

	 	if(command == "say"){

	 			const sayMessage = messageArray.join(" ");

	 			message.delete().catch(O_o =>{});

	 			message.channel.send(sayMessage);

	  	}

 	}
});

client.login(process.env.ACCESS_KEY);