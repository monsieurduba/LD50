//variable du jeu

var jeu = {
    scene : null,
    world : world,
    player: player,
    hud : hud,
    cursor : null,
    enemieTemplate : enemieTemplate,
    enemies : [],
    zoneTemplate : zoneTemplate,
    obstacleTemplate : obstacleTemplate,
    obstacles : [],

}


// Générique debut du jeu

var sceneAccueil = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'SceneAccueil' });
    },

    preload: function ()
    {
        jeu.scene = this;

        //ajout atlas du pad
        jeu.scene.load.atlas("padGB","padGB.png","padGB.json");
        this.load.image("start","start.png");
        this.load.audio("musicintro","musicintro.mp3");


    },

    create: function ()
    { 

        this.music =  this.sound.add('musicintro', {
            volume: 1,
            loop: true
        })
    
        this.music.play()

        //creation des boutons du pad
        pad.gestionPadCreate();
        pad.initpadScene();
        //reinitialiser les scores avant le redemarrage du jeu
        if(jeu.player.aPlayer != undefined){
        console.log("si player non nul alors on reinitialise");
        jeu.player.aPlayer.win = false;
        jeu.player.aPlayer.score = 0;

        }
        jeu.chrono = 0;
        jeu.scoreMax = 0;
        jeu.player.score = 0;
        jeu.player.win = false;
        
        //texte pour demarrer : press start
        //texte pour demarrer : press start
        timeText = {font: "34px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4}; 
        var policeTitre = {
            fontSize : "45px",
            color : "#000000",
            fontFamily : "Mochi"
        }
        var policeTitre2 = {
          fontSize : "23px",
          color : "#000000",
          fontFamily : "Mochi"
      }

      this.add.sprite(350,250,"start");

        //Affichage du texte qui descend tout doucement
        var txt1 = this.add.text(80,400, 'panties storm',policeTitre);

        var txt3 = this.add.text(170,600, 'Press Start to play',policeTitre2);
        },
    
    update:function(){

        //gestion du pad
        pad.gestionPadUpdate();

        //si press start alors demarrage du jeu
        if(clickBoutonStart){
            this.music.stop()

            jeu.scene.scene.stop('SceneLv1');
            jeu.scene.scene.start('SceneLv1');
        }
    }


});