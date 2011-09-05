var abs = require('com.pageforest.hackandslash.abstract');

var $map;
var $sidebar;
var viewSize;

exports.extend({
    'drawMap': drawMap,
    'onUpdate': onUpdate,
    'init': init
});

function init() {
    $map = $('#map');
    $sidebar = $('#sidebar');
    viewSize = 768;
}

function onUpdate(player, mapSize) {
    var top = -mapSize[1] + viewSize + player.pos;
    if (top >= 0) {
        return;
    }
    $map.css('top', top + 'px');
}

function drawMap(map) {
    /*
    t - track - drawn in grey
    w - wall - drawn in blue
    f - floor - drawn in dark yellow
    */

    validateMap(map);
    var viewWidth = 768; 
    var tilesize = viewWidth / map[0].length; 
    var canvas = document.getElementById('map');
    canvas.width = 768;
    canvas.height = tilesize * map.length;
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < map.length; i++) {
        for(var j = 0; j < map[0].length; j++) {
            var line = map[i];

            if (line.charAt(j) == "t") {
                ctx.fillStyle = "rgb(155, 155, 155)";
            } else if(line.charAt(j) == "w") {
                ctx.fillStyle = "rgb(0, 0, 200)";
            } else if (line.charAt(j) == "f") {
                ctx.fillStyle = "rgb(100, 100, 0)";
            } else {
                ctx.fillStyle = "rgb(255, 255, 255)";
                console.log("AWW SHIT: drawMap - wtf is " + line.charAt(j));
            }
            ctx.fillRect (j * tilesize, i*tilesize,
                     (j+1)*tilesize, (i+1)*tilesize);
        }
    }
}


function validateMap(map) {
    var baseline = map[0].length;
    for(var i = 0; i < map.length; i++) {
        if(map[i].length != baseline){
            console.log("AWW SHIT: line " + i + " of map is not the same as the others");
        }
        if(map[i].search("t") == -1) {
            console.log("AWW SHIT: line " + i + " does not have track");
        }
    }
}
