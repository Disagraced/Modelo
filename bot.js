const http = require('http');
const express = require('express');
const app = express();

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

  let prefix = process.env.PREFIX; //El Prefijo default que Elegí fue: -, esté pueden Editarlo en el Archivo .env

client.on('ready', () => {
  
     console.log('Sistema Iniciado \n Conectado a '+client.guilds.size.toLocaleString()+' Servidores y '+client.users.size.toLocaleString()+' Usuarios');
  
  client.user.setPresence({
       status: "online",
       game: {
           name: "Hecho por SkiezLight#6098",
           type: "PLAYING"
       }
   });

  console.log('Conectado y Listo')
  
});

client.on('message', message => { //Evento Mensaje (Message), Aquí podras Agregar los Comandos de tu Bot/Aplicación

  if(message.content.startsWith("ping")){
   let ping = Math.floor(message.client.ping);
   message.channel.send(':ping_pong: `'+ping+' ms.` desde glitch.'); 

  }
  
});

client.login(process.env.TOKEN);