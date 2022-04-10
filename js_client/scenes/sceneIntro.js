
//scene affichage Le GROS CARTON STUDIO

var sceneIntro = new Phaser.Class({

    //The scene is noted
    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        
        Phaser.Scene.call(this, { key: 'sceneIntro'});
        
    },

    preload: function ()
    {
        jeu.scene = this;
        //ajout atlas du pad
        jeu.scene.load.atlas("padGB","padGB.png","padGB.json");
        this.load.image("lgclogo","lgclogo.png");
        this.load.audio("start","start.mp3");

       
    },

    create: function ()
    {
        this.music =  this.sound.add('start', {
            volume: 1,
            loop: false
        })
    
        this.music.play()

          //creation des boutons du pad
          pad.gestionPadCreate();
          pad.initpadScene();
          timeText = {font: "34px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4}; 
          var policeTitre = {
              fontSize : "33px",
              color : "#000000",
              fontFamily : "Mochi"
          }
          var policeTitre2 = {
            fontSize : "23px",
            color : "#000000",
            fontFamily : "Mochi"
        }

        this.add.sprite(340,100,"lgclogo");

          //Affichage du texte qui descend tout doucement
          var txt1 = this.add.text(150,250, 'LE GROS CARTON',policeTitre);

          var txt3 = this.add.text(300,300, 'STUDIO',policeTitre2);
          var txt2 = this.add.text(300,400, 'present',policeTitre2);
          var txt3 = this.add.text(260,600, 'Press Start',policeTitre2);


    },

    
    update:function(){
        //adapter l'ecran à la resolution
        hud.ajusterTailleEcran();

        //gestion du pad
        pad.gestionPadUpdate();

        //si press start alors on passe à la scene suivante
        if(clickBoutonStart){
             jeu.scene.scene.start('SceneAccueil');
        }
    }

});