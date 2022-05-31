const ws = require('ws');

class webSocket {

    constructor(gameId) {
        this.allConnection = {};

        this.wss = new ws.Server({ port: 4000 });
        console.log("new ws server on port 4000")

        this.init();
    }

    init = () => {
        //on ws connection
        this.wss.on('connection', cws => {
            console.log("WS: new client is connected")
            //on message
            cws.on("message", (data) => {
                this.onMessage(data, cws);
            })
        })
        //on close connection
        this.wss.on('close', socket => {
            console.log("web socket connection was closed");
        });
    }

    onMessage = (dataIn, cws) => {
        const data = JSON.parse(dataIn.toString());
        switch (data.command) {
            case "newPlayer":
                this.newPlayer(cws, data.gameId, data.playerId)
                this.messageEveryone(data.gameId);
                break;
            default:
                break;
        }
    }    

    newGame = (gameId) => {
        this.allConnection.gameId = [];
        console.log("WS: game added in websocket connection list")
    }
    newPlayer = (cws, gameId, playerId) => {
        cws.id = playerId
        this.allConnection.gameId.push(cws);
        console.log("WS: new player added to the game connection list")
    }
    messageEveryone = (gameId) => {
        this.allConnection.gameId.forEach(cws => {
            cws.send("new player joined the game")
        });
    }

}


module.exports = webSocket;