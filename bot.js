const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "skylsucks"
const fs = require('fs');
const settings = require("./settings.json");





var fortunes = [
   "Yeah.",
   "Hell no!",
   "I have my doubts.",
   "You're probably gay by the way. Or lesbian. I am not sexist",
 ];

var servers = {};

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
      case "ping":
      console.log("skyl's head is a penis skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis  skyl's head is a penis   ")
          message.channel.sendMessage("Pong!");
          break;

          case "moreinfo":
                      message.channel.sendMessage("As the scout I like to kill french people with bats.");
                      break;

          case "info":
              message.channel.sendMessage("I'm the scout. I wreck the living hell out of all the other classes.");
              break;

          case "memes":
          console.log("memes is working xd")
          var min = 1;
          var max = 3;
          min = Math.ceil(min);
          max = Math.floor(max);
          var randomnumber = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
          console.log(randomnumber);
          switch (randomnumber) {
            case 1: message.channel.send({files: [ 'D:/memes/meme1.jpg']})
                  break;
            case 2: message.channel.send({files: [ 'D:/memes/meme2.jpg']})
                  break;

          }
            break;








              case "help":
                message.channel.sendMessage("For all of you pyro mains, here are the commands: smhelp, smquestion, smping. You can also say: What do you think about Skyl? How cool is soldier cool? Is anybody here? Who do you main? Who is the coolest kid on the server?");
                break;






        case "question":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
                message.channel.sendMessage("Give me a question retard.");
                break;




      }






    }

    if (message.author.equals(bot.user)) return;

    if (message.content == "Is anybody here?") {
        message.channel.sendMessage("I'm here.");
    }

    if (message.content == "How cool is soldier?") {
        message.channel.sendMessage("He is as cool as Pyro, AKA he is not cool at all.")
    }

    if (message.content == "What do you think about Skyl?") {
        message.channel.sendMessage("He's cool, but I don't like green. Red and Blue are way better.")
     }

    if (message.content == "Who is the coolest kid on the server?") {
        message.channel.sendMessage("Probably Materick? He's the only scout main here.")
     }

    if (message.content == "Who do you main?") {
       message.channel.sendMessage("I'm a pyro main because he is the best class! I'm just kidding, I'm the best.")
     }

     if (message.content == "Start spamming!") {
        message.channel.sendMessage(" YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! YOU ARE THE CANCER OF THE INTERNET. SCOUT MAINS ARE SUPERIOR! YOU ARE CHINESE SLANTED AFRICAN HUNGRY CANNIBALS!!! ")

    }
});


bot.login(settings.token);
