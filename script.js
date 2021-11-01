let music = {},
    typeSprite = '',
    types = [],
    gameData = {}
    attackName = '',
    curAttack = {},
    randInt = 0,
    enemyAttack = {},
    characters = [],
    defendProgressInt = null,
    defendProgressComplete = 0,
    progressInt = null,
    progressComplete = 0
    char = '';

function buildVars() {
    // all the music for the game
    // http://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
    music = {
        opening: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3",
        battle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3",
        victory: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/csqodhnibz/108-victory-vs-wild-pokemon-.mp3",
        pikachu: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/hpjacpzwof/170-pikachu.mp3",
        charmander: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/wfwdwleyga/149-charmander.mp3",
        squirtle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/soagplijvq/152-squirtle.mp3",
        bulbasaur: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/gvqmhhryki/146-bulbasaur.mp3",
        machop: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/viaskmobgb/213-machop.mp3"
    }

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
    curAttack = {};
    ranInt = {};
    enemyAttack = {};
    defendProgressInt = null;
    defendProgressComplete = 0;
    progressInt = null;
    progressComplete = 0;

    // This would be the available characters for the game in play
    characters = [{
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
            attacks: [{
                    name: "thunder jolt",
                    hp: randomNum(40, 20),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                },
                {
                    name: "electro ball",
                    hp: randomNum(60, 45),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                },
                {
                    name: "volt tackle",
                    hp: randomNum(75, 60),
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
            attacks: [{
                    name: "ember",
                    hp: randomNum(40, 20),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                },
                {
                    name: "flamethrower",
                    hp: randomNum(60, 45),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                },
                {
                    name: "burning tail",
                    hp: randomNum(75, 60),
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
            weakness: ['electric', 'grass'],
            resistance: ['normal', 'fire'],
            img: {
                default: "http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es",
                front: "https://64.media.tumblr.com/ddd22fe10a485ed56a46d958c058a970/tumblr_n9lnpepqkW1scncwdo1_500.gif",
                back: "http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426"
            },
            hp: {
                current: 500,
                total: 500
            },
            attacks: [{
                    name: "bubble",
                    hp: randomNum(40, 20),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                },
                {
                    name: "water gun",
                    hp: randomNum(60, 45),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                },
                {
                    name: "shell attack",
                    hp: randomNum(75, 60),
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
            resistance: ['water', 'psychic'],
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
            attacks: [{
                    name: "tackle",
                    hp: randomNum(40, 20),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                },
                {
                    name: "vine whip",
                    hp: randomNum(60, 45),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                },
                {
                    name: "razor leaf",
                    hp: randomNum(75, 60),
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
            weakness: ['psychic', 'electric'],
            resistance: [],
            img: {
                default: "https://poketouch.files.wordpress.com/2016/12/superpower_pokemon_machop.png?w=475",
                front: "http://graphics.tppcrpg.net/xy/normal/066F.gif",
                back: "https://i.postimg.cc/RVY2mDTD/Machoke-Back-Shiny-XY.gif"
            },
            hp: {
                current: 500,
                total: 500
            },
            attacks: [{
                    name: "low kick",
                    hp: randomNum(40, 20),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                },
                {
                    name: "karate chop",
                    hp: randomNum(60, 45),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                },
                {
                    name: "seismic toss",
                    hp: randomNum(75, 60),
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
        if(min === undefined || min === '' || min === null){
            // default value
            min = 0;
        }
        // Random Number !!! 
        return Math.floor(Math.random() * (max - min) + min);
    }

    // POKEMON BUILD // 
    // Here I am going to build characters UI 
    function population(container, characters) {
        // To show images
        let facing = 'front';
        if (characters === 'hero') {
            // Here it would show the back & front of the pokemon 
            facing = 'back';
        }
        // Building the pokemon
        container.append('<section class="char"><img src="'+gameData[character].img[facing]+'" alt="'+gameData[character].name+'"><aside class="data"><h2>'+gameData[character].name+'</h2><div><progress max="'+gameData[character].hp.total+'"></progress><p><span>'+gameData[character].hp.current+'</span>/'+gameData[character].hp.total+'</p></div></aside></section>');
    }

    // ATTACK MULTIPLIER //
    // This would modify the attack value for weaknesses & strengths
    function attackMultiplier(attacker, curAttack){
      let defender = 'enemy';
      if(attacker === 'enemy'){
        defender = 'hero';
      }
    
      if(gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0){
        // weakness exists
        curAttack.hp *= 2;
      }
    
      if(gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0){
        // weakness exists
        curAttack.hp /= 2;
      }
    
      curAttack.hp = Math.floor(curAttack.hp);
      return curAttack.hp;

      // SFX PLAYER
// stops music and plays sfx
function playSound(name){
  // load sfx src
  $('audio.sfx').attr('src', music[name])
  // pause game music
  $('audio.music')[0].pause();
  // character announce yourself
  $('audio.sfx')[0].play();

  // timeout to stop music at given point
  setTimeout(function(){
    // pause the sfx
    $('audio.sfx')[0].pause();
    // start the music again
    $('audio.music')[0].play();
    // reset the sfx
    $('audio.sfx')[0].currentTime = 0;
  },2000);
}

    // HP BAR //

    function setHp() {
        // Showing the stop health bar and its set value
        clearInterval(defendProgressInt);
        clearInterval(progressInt);
        $('.stadium .enemy progress').val(gameData.enemy.hp.current);
        $('.stadium .hero progress').val(gameData.hero.hp.current);
      }

    // RESET //
    function resetGame(){
      // set default values for game variables
      buildVars();
    
      // clear the stadium
      $('.hero').empty();
      $('.enemy').empty();
    
      // reset
      $('.attack-list li').unbind('click');
      $('.attack-list').empty();
      $('.stadium .enemy').css({'padding':'0'});
      $('.instructions p').text('Choose your hero');
    
      // set & start the opening game music
      $('audio.music').attr('src',music["opening"]);
      $('audio.music')[0].play();
    
      // empty characters
      $('.characters').empty();
      $('.characters').removeClass('hidden');
    
      for(let i in characters){
        // build the character list
        $(".characters").append('<div class="char-container"><img src="'+characters[i].img.default+'" alt="'+characters[i].name+'"><h2>'+characters[i].name+'</h2><span class="type '+characters[i].type+'"></span></div>')
      }
      characterChoice();
    }
    resetGame();
    $('.logo').click(function(){resetGame();});

    // POKEMON CHOICE // 
    function characterChoice() {
        // picking which pokemon you want in battle
        $('.characters .char-container').click(function() {
            // the chosen pokemon name
            let name = $(this).children('h2').text()
            toLowerCase();
            // to be able to switch the current step in the game
            switch (gameData.step) {
                case 1:
                    for (let i in characters) {
                        if (character[i].name === name) {
                            gameData.hero = character[i];
                        }
                    }
                    char = $(this).remove();
                    populateChar($('.stadium .hero'),
                        'hero');

                    for (let i in gameData.hero.attacks) {
                        $('.attack-list').append('<li><p class="attack-name"><strong>' + gameData.hero.attacks[i].name + '</strong></p><p class="attack-count"><small><span>' + gameData.hero.attacks[i].avail.remaining + '</span>/' + gameData.hero.attacks[i].avail.total + '</small></p></li>');
                    }
                    $('.attack-list').addClass('disabled');
                    // updates the instructions
                    $('.instruction p').text('Choose your enemy!');
                    // setting the health bar value
                    $('stadium .hero progress').val(gameData.hero.hp.current);
                    // pokemon roar
                    playSound(name);
                    // moving on selecting opponent
                    gameData.step = 2;
                    break;
                case 2:
                    // selecting opponent to fight against
                    for (let i in characters) {
                        if (characters[i].name === name) {
                            // to be able to find and save the opponent data
                            gameData.enemy = characters[i];
                        }
                    }
                    // removing the opponent from the list
                    char = $(this).remove();
                    // building the opponent
                    populateChar($('.stadium .enemy'), 'enemy');
                    $('.stadium .enemy').css({
                        'padding': '25px 0'
                    });
                    // updating the instructions
                    $('.instructions p').text('Fight!!!');
                    // hiding the pokemon list 
                    $('.characters').children().slideUp('500', function() {
                        $('.characters').addClass('hidden');
                    });
                    // update opponent health bar 
                    $('.stadium .enemy progress').val(gameData.enemy.hp.current);
                    // opponent whimpers in fear
                    playSound(name);
                    // update steps to attack phase and bidding click events 
                    gameData.step = 3;
                    attackList();
                    break;
            }
        });
    }

    // POKEMON ATTACK //
    function attackEnemy(that, callback) {
        // player attacking the opponent
        // list of attacks
        attackName = that.children('.attack-name').children('strong').text().toLowerCase();

        for (let i in gameData.hero.attacks) {
            if (gameData.hero.attacks[i].name === attackName) {
                // pick which attack 
                curAttack = gameData.hero.attacks[i];
            }
        }

        // if there any attacks left 
        if (curAttack.avail.remaining > 0) {
            // ATTACKS !!!!! 
            $('.attack-list').addClass('disabled');

            $('.hero .char img').animate({
                    'margin-left': '-30px',
                    'margin-top': '10px'
                },
                50,
                'swing'
            );
            $('.hero .char img').animate({
                    'margin-left': '30px',
                    'margin-top': '-10px'
                },
                50,
                'swing'
            );
            $('.hero .char img').animate({
                    'margin-left': '0px',
                    'margin-top': '0px'
                },
                50,
                'swing'
            );

            // attack opponent
            gameData.enemy.hp.current -= attackMultiplier('hero', curAttack);

            if (gameData.enemy.hp.current <= 0) {
                // rip opponent 

                clearModal();
                $('.modal-in header').append('<h1>Opponent Is Dead!</h1><span class="close">x</span>');
                $('.modal-in section').append('<p>You Win! Try Again.</p>');
                $('.modal-out').slideDown('400');
                modalControls();

                gameData.enemy.hp.current = 0;
                // clear battle field 
                $('.enemy').empty();
                // show the available pokemon
                $('.characters').removeClass('hidden');
                $('.characters').children().slideDown('500');

                gameData.enemy = {};

                // choose opponent
                gameData.step = 2;
                // unbind click for reset
                $('.attack-list li').unbind('click');
            } else {
                // opponent is still alive (Attack!!!)

                // subtract attack
                curAttack.avail.remaining--;

                // interval to animate health bar
                progressInt = setInterval(function() {
                    // get current value of health bar
                    let val = $('.stadium .enemy progress').val();
                    val--;

                    // update health bar value
                    $('.stadium .enemy progress').val(val);

                    if (val === gameData.enemy.hp.current) {
                        // if you've hit your target clear interval
                        clearInterval(progressInt);
                        progressComplete = 1;
                    }
                }, 1);

                // update health numbers
                $('.stadium .enemy .data p span').text(gameData.enemy.hp.current);
                that.children('.attack-count').children('small').children('span').text(curAttack.avail.remaining);

                // wait a second to recover
                setTimeout(function() {
                    // now defend that attack
                    defend(that);
                }, 1000);
            }
        }
    }

    // ATTACK SEQUENCE //
    function attackList() {
        // attack instantiation
        $('.attack-list').removeClass('disabled');

        $('.attack-list li').click(function() {
            // attack choice is clicked
            let doAttack = 1;

            if (gameData.step === 3) {
                // attack step - start attack sequence
                attackEnemy($(this));
            }
        });

        setTimeout(function() {
            // characters chosen - set & start the battle music
            $('audio.music').attr('src', music["battle"]);
            $('audio.music')[0].play();
        }, 1500);
    }

    // MODAL Controls // 
    function modalControls() {
        $('.modal-out').click(function() {
            $(this).slideUp('400');
        });
        $('.modal-in .close').click(function(e) {
            $('.modal-out').slideUp('400');
        });

        $('.modal-in').click(function(e) {
            e.stopPropagation();
            e.preventDefault();
        });
    }

    function clearModal() {
        $('.modal-in header').empty();
        $('.modal-in section').empty();
        $('.modal-in footer').empty();
        setHP();
    }
  }
}