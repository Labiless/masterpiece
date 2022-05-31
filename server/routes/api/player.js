const {ObjectId} = require("mongodb");

const newPlayer = (username) => {
    return {
        playerId : ObjectId(),
        username : username,
        draw : null,
        vote : null
    }
}

module.exports = newPlayer;