const Discord = require("discord.js")
const client = new Discord.Client({intents: 32767})

const config = require("./config.json")

const token = require("./token.json")

client.login(token.token)

client.on("ready", () => {
    console.log("Bot online!")
})

client.on("messageCreate", message => {
    if(message.content == "!gich") {
        message.channel.send("si sono gich")
    }
})

client.on("messageCreate", message => {
    if(message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
        .setTitle("Titolo") //Titolo
            .setColor("#34a42d") // Colore principale
            //.setURL("UrlTitolo") //Link sul titolo
            //.setAuthor("Autore") /*OPPURE*/.setAuthor("Autore", "LinkImmagine") //Autore
            .setDescription("Descrizione") //Descrizione
            //.setThumbnail("UrlCopertina") //Copertina
            //Aggiungere elementi
            .addField("Titolo Field", "Contenuto Field", true) //QUI TUTTI I PARAMETRI SONO OBBLIGATORI - True o false = se questo elemento deve essere in linea con gli altri
            .setImage("https://i.ibb.co/DwnDvj5/f31aed71d54adc6ace7f027149f6b527.png") //Immagine
            .setFooter({text: "TestoFooter"}) // Testo piccolino in fondo
            .setTimestamp() //Se mettere o no l'orario di arrivo del messaggio
            message.channel.send({embeds: [embed]})
    }
})
