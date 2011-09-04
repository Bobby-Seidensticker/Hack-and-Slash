var sta = require('com.pageforest.hackandslash.static');
var ui = require('com.pageforest.hackandslash.ui');

exports.extend({
    'onReady': onReady,
});

var map;
var player;

function onReady () {
    handleAppCache();
    client = new clientLib.Client(app);
    client.addAppBar();
    abs.init(client, exports);
    storage = client.storage;

    map = sta.map;
    player = newPlayer();
}

function newPlayer () {
    return {
        'pos': 0,
        'maxHp': 10,
        'hp': 10,
        'maxMana': 15,
        'mana': 15,
        'deck': []
    };
}