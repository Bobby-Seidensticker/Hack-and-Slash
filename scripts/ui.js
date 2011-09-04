exports.extend({
    'drawMap': drawMap
});

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



function onUpdate() {
    
}

function onKeyDown(e) {
/*    switch (e.keyCode)
    {
    case 37: //left
        e.preventDefault();
        ms.move(3);
        break;
    case 38: //up
        e.preventDefault();
        ms.move(0);
        break;
    case 39: //right
        e.preventDefault();
        ms.move(1);
        break;
    case 40: //down
        e.preventDefault();
        ms.move(2);
        break;
    case 32: //space - shoot
        e.preventDefault();
        ms.shoot();
        break;
    case 68: //d - shoot
        e.preventDefault();
        ms.shoot();
        break;
    case 70: //f - punch
        e.preventDefault();
        ms.punch();
    default:
    }*/
}

/*var guy0 = new Image();
guy0.src = 'images/guy0.png';
var guy1 = new Image();
guy1.src = 'images/guy1.png';
var guy2 = new Image();
guy2.src = 'images/guy2.png';
var guy3 = new Image();
guy3.src = 'images/guy3.png';
*/

function drawMap(map) {
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
