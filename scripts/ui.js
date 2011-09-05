var abs = require('com.pageforest.hackandslash.abstract');

// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var $map;
var $sidebar;
var $sprites;
var $all;
var viewSize;
var player;
var mapSize;

exports.extend({
    'drawMap': drawMap,
    'onUpdate': onUpdate,
    'init': init,
    'modify': modify
});

function init(p, mSize) {
    player = p;
    mapSize = mSize;
    $map = $('#map');
    $sidebar = $('#sidebar');
    $sprites = $('#sprites');
    $all = $('#all');
    viewSize = 768;

    onUpdate();
    $('body').bind('keydown', onKey);
}

function onKey(evt) {
    var enter = 13;
    if (evt.keyCode == enter) {
        
    }
}

function modify(p) {
    if (player) {
        player = p;
    }
}

function onUpdate() {
    requestAnimFrame(onUpdate);

    var top = -mapSize[1] + viewSize + player.pos;
    console.log('onUpdate, top: ' + top);
    if (top < 0) {
        $all.css('-webkit-transform', 'translate(0px, ' + top + 'px)');
    }
}

function drawPlayer() {
    var canvas = $('#sprits')[0];
    canvas.width = viewSize;
}

function drawMap(map) {
    /*
    t - track - drawn in grey
    w - wall - drawn in blue
    f - floor - drawn in dark yellow
    */

    drawSidebar();
    //HACK!!!
    validateMap(map);
    var tilesize = viewSize / map[0].length; 
    var canvas = document.getElementById('map');
    canvas.width = viewSize;
    canvas.height = tilesize * map.length;
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < map.length; i++) {
        for(var j = 0; j < map[0].length; j++) {
            var line = map[i];

            if (line.charAt(j) == "t") {
                ctx.fillStyle = "rgb(155, 155, 155)";
            } else if(line.charAt(j) == "w") {
                ctx.fillStyle = "rgb(0, 0, 200)";
            } else if (line.charAt(j) == " ") {
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

function drawSidebar() {
    var sbWidth = 256;
    var sbHeight = 768;
    var HPval = 30;
    var HPmax = 30;


    var canvas = document.getElementById('sidebar');
    canvas.width = sbWidth;
    canvas.height = sbHeight;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(155, 155, 155)";
    ctx.fillRect (0, 0, sbWidth, sbHeight);

    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect (30, 30, sbWidth - 60, 30);

    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.strokeRect (30, 30, sbWidth - 60, 30);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "arial bold 20px";
    ctx.fillText = ("fuck!", sbWidth/2, 50);

    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect (30, 75, sbWidth - 60, 30);
    ctx.strokeRect (30, 75, sbWidth - 60, 30);
}
