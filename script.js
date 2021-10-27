let typeSprite = '',
    types = [],
    gameData = {},
    attackName = '',
    currentAttack = {},
    randomAttack = {},
    randomInt = 0,
    enemyAttack = {},
    characters = [],
    defendProgressInt = null,
    defendProgressComplete = null,
    progressInt = null,
    progressComplete = 0;

typeSprites = 'http://orig15.deviantart.net/24d8/f/2011/057/3/5/ge___energy_type_icons_by_aschefield101-d3agp02.png';
types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

// This would be the data for the game in play
gameData = {
    steps: 1,
    hero: {},
    enemy: {}
}

// This would be the attack variables for the game 
attackName = '';
currentAttack = {};
randomInt = {};
enemyAttack = {};
defendProgressInt = null;
defendProgressComplete = 0;
progressInt = null;
progressComplete = 0;

// This would be the available characters for the game in play
characters = [
    {
      name: "pikachu",
      type: 'electric',
      weakness: ['fighting'],
      resistance: ['steel'],
      img: {
        default: "http://vignette2.wikia.nocookie.net/all-anime-characters/images/7/7b/Cute_pikachu_with_hat_by_mlpochea-d63xlom.png/revision/latest?cb=20150108111832",
        front: "https://i.postimg.cc/Hn6K1jsq/Pikachu-F-Shiny-XY.gif",
        back: "http://vignette4.wikia.nocookie.net/pokemon/images/5/5b/Pikachu_Back_XY.gif/revision/latest?cb=20141009080948"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "thunder jolt",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "electro ball",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "volt tackle",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "thunder crack",
          hp: randomNum(75, 60),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "charmander",
      type: 'fire',
      weakness: ['water'],
      resistance: ['grass'],
      img: {
        default: "http://img3.wikia.nocookie.net/__cb20150330015216/pokemon/images/f/f5/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png",
        front: "https://i.postimg.cc/Z5sdvmCJ/Charmander-XY-1.gif",
        back: "http://vignette1.wikia.nocookie.net/pokemon/images/2/23/Charmander_Back_XY.gif/revision/latest?cb=20141009063457"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "ember",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "flamethrower",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "burning tail",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "fire spin",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "squirtle",
      type: 'water',
      weakness: ['electric','grass'],
      resistance: ['normal','fire'],
      img: {
        default: "http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es",
        front: "https://64.media.tumblr.com/ddd22fe10a485ed56a46d958c058a970/tumblr_n9lnpepqkW1scncwdo1_500.gif",
        back: "http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "bubble",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "water gun",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "shell attack",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "hydro pump",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "bulbasaur",
      type: 'grass',
      weakness: ['fire'],
      resistance: ['water','psychic'],
      img: {
        default: "http://vignette4.wikia.nocookie.net/pokemon/images/8/81/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105223818",
        front: "https://media.giphy.com/media/iIWW4BM6nNWTu/giphy.gif",
        back: "https://thumbs.gfycat.com/AdventurousUnlawfulBlackbear-max-1mb.gif",
        deranged: "https://media.giphy.com/media/iIWW4BM6nNWTu/giphy.gif",
        sleep: "https://64.media.tumblr.com/4dd7682db26ac687ef81f0dd06794652/tumblr_msesq5uAIk1r93jsro1_500.gif"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "tackle",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "vine whip",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "razor leaf",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "solar beam",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "machop",
      type: 'fighting',
      weakness: ['psychic','electric'],
      resistance: [],
      img: {
        default: "https://poketouch.files.wordpress.com/2016/12/superpower_pokemon_machop.png?w=475",
        front: "http://graphics.tppcrpg.net/xy/normal/066F.gif",
        back:  "https://i.postimg.cc/RVY2mDTD/Machoke-Back-Shiny-XY.gif"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "low kick",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "karate chop",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "seismic toss",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "hundred furious punches",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    }
  ];

/// UTILITY ///
// RANDOM NUMBER GENERATOR
function randomNum(max, min) {
    // The min value is optional & not require
    // Here it would generate a random number
    if(min === undefined || min === '' || min === null) {
        // default value
    }
    // Random Number !!! 
    return Math.floor(Math.random() *(max - min) + min);
}

// CHARACTERS BUILD // 
// Here I am going to build characters UI 
function population(container,characters) {
    // To show images
    let facing = 'front';
    if(characters === 'hero'){
        // Here it would show the back & front of the pokemon 
        facing = 'back';
    }
    // Building the pokemon
    container.append('<section class="char"><img src="'+gameData[character].img[facing]+'" alt="'+gameData[character].name+'"><aside class="data"><h2>'+gameData[character].name+'</h2><div><progress max="'+gameData[character].hp.total+'"></progress><p><span>'+gameData[character].hp.current+'</span>/'+gameData[character].hp.total+'</p></div></aside></section>');
}

// ATTACK MULTIPLER //
// This would modify the attack value for weaknesses & strengths
 function attackMultiplier(attacker, curAttack) {
   let defender = 'enemy';
   if(attacker == 'enemy'){
     defender == 'hero';
   }
   if(gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0){
     currentAttack.hp *= 2; // Weakness 
   }
   if(gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0){
     currentAttack.hp *= 2; // Resistance 
   }
   currentAttack.hp = Math.max(currentAttack.hp);
   return currentAttack.hp;
 }
 