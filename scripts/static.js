exports.extend({
    'data': data,
    'spells': spells,
    'stockDeck': stockDeck,
    'map': map
});

function data () {
    var arr = [];
    return arr;
}

function spells() {
    /*
      This function returns the data values which inform what properties and 
      values a card of given type and level has.

      projectile - damage (of projectile), mana (cost)
      food - hp (amount healed), mana (amount recovered)
      dmgmulti (multiplies all damage done) - modifier (multiply damage by ____),
      duration (in seconds), mana (cost)
    */
    var obj = {
        "projectile":
        [{"damage": 3, "mana": 0},
         {"damage": 5, "mana": 1},
         {"damage": 7, "mana": 2},
         {"damage": 10, "mana": 3}],

        "food":
        [{"hp": 5, "mana": 3},
         {"hp": 6, "mana": 4},
         {"hp": 7, "mana": 5}],

        "dmgmulti":
        [{"modifier": 1.5,
          "duration": 10,
          "mana": 1},

         {"modifier": 2,
          "duration": 10,
          "mana": 2},

         {"modifier": 5,
          "duration": 5,
          "mana": 5}]
    };
    return obj;
}

function stockDeck() {
    var deck = [
        {
            "type": "projectile", 
            "level": 0
        },
        {
            "type": "projectile", 
            "level": 1
        },
        {
            "type": "food", 
            "level": 1
        },
        {
            "type": "food", 
            "level": 2
        },
        {
            "type": "dmgmulti", 
            "level": 1
        }
    ];
    return deck;
}

function map() {
    return [ "wwwwwwwwwwwwwwwwwtwwwwwwwwwwwwww",
             "wwwwwwwwwwwwwwwwftfwwwwwwwwwwwww",
             "wwwwwwwwwwwwwwfftfffwwwwwwwwwwww",
             "wwwwwwwwwwwwfffftffffffwwwwwwwww",
             "wwwwwwwwwwwffffftffffffffwwwwwww",
             "wwwwwwwwwffffffftfffffffffwwwwww",
             "wwwwwwwffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwwwfffffffftffffffffwwwwwww",
             "wwwwwwfwfffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwwffffffffftffffffffwwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftffffffffwwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffwwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwffffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftfffffffffwwwwww",
             "wwwwwwfffffffffftffffffffffwwwww",
             "wwwwwwfffffffffftffffffffwffwwww",
             "wwwwwwfffffffffftffffffffffffwww",
             "wwwwwwfffffffffftfffffffffffffww",
             "wwwwwwfffffffffftffffffffffffffw"
           ];
}

function monsters() {
    return {
        "goblin" : {"name": "Goblin Warrior", 
                    "level": 1,
                    "drops": {"projectile":0},
                    "movement" : "charge",
                    "attack": "melee"
                }
    };
}