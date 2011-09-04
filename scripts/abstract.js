var clientLib = require('com.pageforest.client');
var sta = require('com.pageforest.hackandslash.static');
var ui = require('com.pageforest.hackandslash.ui');

exports.extend({
    'onReady': onReady,
    'player': player,
    'map': map,
    'mapSize': mapSize
});

var player;
var map;
var mapSize = [];
var client;
var app = {
    // Loading a document
    setDoc: function(json) {
        $('#blob').val(json.blob);
    },

    // Saving a document
    getDoc: function() {
        return {
            "blob": $('#blob').val()
        };
    }
};
var tickInterval;

function onReady () {
    handleAppCache();
    client = new clientLib.Client(app);
    client.addAppBar();
    storage = client.storage;
    map = sta.map;
    player = newPlayer();

    var blockSize = 768 / map[0].length;
    mapSize = [768, map.length * blockSize];
    ui.drawMap(map);
    ui.onUpdate();
    tickInterval = setInterval(tick, 50);
}

function tick() {
    player.pos += 8;
    ui.onUpdate();
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

// For offline - capable applications
function handleAppCache() {
    if (typeof applicationCache == 'undefined') {
        return;
    }
    if (applicationCache.status == applicationCache.UPDATEREADY) {
        applicationCache.swapCache();
        location.reload();
        return;
    }
    applicationCache.addEventListener('updateready', handleAppCache, false);
}

function getDocid() {
    if (client.username) {
        return client.username;
    }
}
