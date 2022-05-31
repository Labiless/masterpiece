const express = require("express");
const mongoDb = require("mongodb");
const Joi = require('joi');
const newPlayer = require('./player');
const webSocket = require("./websocket")

const router = express.Router();
const ws = new webSocket();

//menage request

//all path

//GET
// api/games/                        -> get all games
// api/games/gameId                  -> get game by id
// api/games/gameId/players          -> get all players
// api/games/gameId/players/playerId -> get game by id

//POST
// api/games/newgame                 -> create new game
// api/games/gameId/newplayer        -> create new player

//DELETE
// api/games/gameId                  -> delete game
// api/games/gameId/players/playerId -> delete single user  


//GET
//--get game by id
router.get("/:gameId", async (req, res) => {
    try {
        const games = await getAllGames();
        res.send(await games.find({ _id: mongoDb.ObjectId(req.params.gameId) }).toArray());
    } catch (error) {
        errorHandler(error, res)
    }
});

//--get all game 
router.get("/", async (req, res) => {
    try {
        const games = await getAllGames()
        res.send(await games.find({}).toArray());
    } catch (error) {
        errorHandler(error, res)
    }
});

//--get all player by game id
router.get("/:gameId/players", async (req, res) => {
    try {
        const gameId = mongoDb.ObjectId(req.params.gameId);
        const games = await getAllGames()
        const game = await games.find({ _id: gameId }).toArray();
        console.log(game)
        res.send(game[0].players);
    } catch (error) {
        errorHandler(error, res)
    }

});

//--get player by id (need game id and player id) 
router.get("/:gameId/players/:playerId", async (req, res) => {
    try {
        const gameId = mongoDb.ObjectId(req.params.gameId);
        const playerId = mongoDb.ObjectId(req.params.playerId);
        const games = await getAllGames()
        const game = await games.find({ _id: gameId }).toArray();
        const player = game[0].players.find(player => player.playerId.equals(playerId));
        res.send(player);
    } catch (error) {
        errorHandler(error, res)
    }
});

//POST
//--create new game
router.post("/newgame", async (req, res) => {
    try {
        const games = await getAllGames();
        const _id = mongoDb.ObjectId();
        //insert new game
        await games.insertOne({
            _id,
            winner: null,
            players: [],
            createdAt: new Date()
        })
        //return game id when game is created
        res.status(201).json({ gameId: _id, status: "game created" });
        //create new entry in ws client list
        ws.newGame(_id);
        console.log(`New game created: gameId(${_id})`)
    } catch (error) {
        errorHandler(error, res)
    }
});

// create new player
router.post("/:gameId/newplayer", async (req, res) => {
    try {
        const player = newPlayer(req.body.username);
        console.log("newplayer: " + req.body.username)
        const gameId = mongoDb.ObjectId(req.params.gameId);
        const games = await getAllGames();
        await games.updateOne(
            { _id: gameId },
            { $push: { players: player } }
        )
        res.status(201).json({ gameId: gameId, playerId: player.playerId, username: player.username });
        console.log(`New player added to ${gameId}: playerId(${player.playerId})`)
    } catch (error) {
        errorHandler(error, res)
    }
});

//DELETE
//--delete game
router.delete("/:gameId", async (req, res) => {
    try {
        const gameId = mongoDb.ObjectId(req.params.gameId);
        const games = await getAllGames();
        await games.deleteOne({ _id: gameId })
        res.status(201).json({ gameId: gameId, status: "game deleted" });
    } catch (error) {
        errorHandler(error, res)
    }
});

//--delete user
router.delete("/:gameId/players/:playerId", async (req, res) => {
    try {
        const gameId = mongoDb.ObjectId(req.params.gameId);
        const playerId = mongoDb.ObjectId(req.params.playerId);
        const games = await getAllGames();
        await games.updateOne(
            { _id: gameId },
            { $pull: { players: { playerId } } }
        )
        res.status(201).json({ gameId: gameId, status: "player deleted" });
    } catch (error) {
        errorHandler(error, res)
    }
});

//menage DB call
//--get all game
const getAllGames = async () => {
    const client = await mongoDb.MongoClient.connect("mongodb+srv://labiles:hYBpzPpqlUC2BUyi@masterpiece.g5dwx.mongodb.net/?retryWrites=true&w=majority");
    return client.db('masterpiece').collection('games');
};

//generic error handler
const errorHandler = (e, res) => {
    console.log(e)
    res.status(400).send(e.message)
};

module.exports = router;    