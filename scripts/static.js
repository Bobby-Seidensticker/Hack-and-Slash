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
      melee - (damage) - normal attack
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
          "mana": 5}],
        
        "melee":
        [{"damage": 1},
         {"damage": 2}]
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
    return [ "WWWWWWWWWWWWWWWWWtWWWWWWWWWWWWWW",
             "WWWWWWWWWWWWWWWW t WWWWWWWWWWWWW",
             "WWWWWWWWWWWWWW  t   WWWWWWWWWWWW",
             "WWWWWWWWWWWW    t      WWWWWWWWW",
             "WWWWWWWWWWW     t        WWWWWWW",
             "WWWWWWWWW       t         WWWWWW",
             "WWWWWWW         t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW      1   t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWWWW        t        WWWWWWW",
             "WWWWWW W        t   1     WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWWW         t        WWWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t 1       WWWWWW",
             "WWWWW     1     t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW      1    t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t        WWWWWWW",
             "WWWWW           t  1      WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW      1    t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t        WWWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW     1    t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t  1      WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t  1      WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW     1     t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWW          t        WWWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW      1   t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWW           t        WWWWWWW",
             "WWWWWW      1   t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t        WWWWWWW",
             "WWWWWW          t   1     WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW    2     t   2     WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW      1   t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t        WWWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t   1     WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW     1    t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t        WWWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW      1   t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t   1     WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW       1  t         WWWWWW",
             "WWWWWW          t        WWWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWW           t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW    1     t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t         WWWWWW",
             "WWWWWW          t          WWWWW",
             "WWWWWW          t        W  WWWW",
             "WWWWWW          t            WWW",
             "WWWWWW          t             WW",
             "WWWWWW          t              W"
           ];
}

/*
Description of different monsters
name: displayed name of monster (if we display it somewhere)
level: level of monster, used for computing xp
drops: array of possible drops
movement: charge - monster advances toward player
          stay - monster holds ground (and shoots)
          (possible: 'retreat' move back as fires)
attack:  card skill used to attack
*/

function monsters() {
    return {
        "goblin" : {"name": "Goblin Warrior", 
                    "level": 1,
                    "drops": ["projectile0"],
                    "movement" : "charge",
                    "attack": "melee0"
                },
        "troll" : {"name": "Troll", 
                    "level": 2,
                    "drops": ["food0", "dmgmulti0"],
                    "movement" : "charge",
                    "attack": "melee1"
                },
        "elf" : {"name": "Elven Archer", 
                    "level": 3,
                    "drops": ["projectile1", "dmgmulti2"],
                    "movement" : "stay",
                    "attack": "projectile1"
                },
        "turret" : {"name": "Turret", 
                    "level": 5,
                    "drops": ["projectile2", "food1"],
                    "movement" : "stay",
                    "attack": "projectile2"
                }
    };
}