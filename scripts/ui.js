var abs = require('com.pageforest.hackandslash.abstract');

exports.extend({
    'drawMap': drawMap,
    'onUpdate': onUpdate
});

function onUpdate() {
    
}

function drawWorld() {
    var map = sta.map;
    var tilesize = 24; 
    var canvas = document.getElementById('canvasWorld');
    canvas.width = canvas.width;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect (0, 0, 360, 360);

    var dir = ms.getPlayerInfo().dir;
    var map = ms.getLocalRegion();
    for (var i = 0; i < 15; i++) {
        for(var j = 0; j < 15; j++) {
            var line = map[i];

            if (line.charAt(j) == "u") {
                ctx.fillStyle = "rgb(255, 255, 255)";
            } else if(line.charAt(j) == "w") {
                ctx.fillStyle = "rgb(50, 0, 0)";
            } else if (line.charAt(j) == "b") {
                ctx.fillStyle = "rgb(0, 0, 200)";
            } else {
                ctx.fillStyle = "rgb(255, 255, 255)";
            }
            ctx.fillRect (j * tilesize, i*tilesize,
                     (j+1)*tilesize, (i+1)*tilesize);
            
            /*if (line.charAt(j) == "b") {
                ctx.drawImage(block, i*tilesize, j*tilesize);
            }*/
        
        if(line.charAt(j) == "u" || 
           line.charAt(j) == "r" || 
           line.charAt(j) == "m"){
        //draw triangle indicating direction
                //ctx.fillStyle = "rgb(0,0,0)";
                switch(dir) {
                    case 0:
                    ctx.drawImage(guy0, i*tilesize, j*tilesize);
                    break;
                    case 1:
                    ctx.drawImage(guy1, i*tilesize, j*tilesize);
                    break;
                    case 2:
                    ctx.drawImage(guy2, i*tilesize, j*tilesize);
                    break;
                    case 3:
                    ctx.drawImage(guy3, i*tilesize, j*tilesize);
                    break;
                    
                }
                ctx.fill();    
            }
        }
    }
    console.log(map);
}
