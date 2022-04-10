var jeu = {
    scene : null,
    world : world,
    player: player,
    hud : hud,
    cursor : null,
}
// Générique debut du jeu
var txt1;
var Alphabet = ['0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var a = 10;
var Col = 0;
var Pseudo;


var sceneScore = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'SceneScore' });
    },

    preload: function ()
    {
        jeu.scene = this;
        //ajout atlas du pad
        jeu.scene.load.atlas("padGB","padGB.png","padGB.json");
        jeu.scene.load.audio("musicgo","musicgo.mp3");

    },

    create: function ()
    { 

        this.music =  this.sound.add('musicgo', {
            volume: 1,
            loop: true
        })
    
        this.music.play()


        jeu.scene.anims.create({
            key: "goanim",
            frames : jeu.scene.anims.generateFrameNames("go",{prefix:"go",start:1,end:4, suffix:'.png'}),
            frameRate:10,
            repeat : -1
        });
        go = this.add.sprite(300, 220, "go");
        go.play('goanim');

        //creation des boutons du pad
        timeText = {font: "34px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4}; 
        var policeTitre = {
            fontSize : "33px",
            color : "#000000",
            fontFamily : "Mochi"
        }

        Pseudo = "";
        pad.gestionPadCreate();
        pad.initpadScene();
        console.log("fin du jeu");
        console.log(jeu.player);
        txt2  = this.add.text(180,300, 'SCORE : '+jeu.score,policeTitre); 

        txt1  = this.add.text(160,400, 'ENTER YOUR \nPLAYER NAME ?\n . . .',policeTitre); 
        //si jeu fini alors demander pseudo au joueur
        //var txt2 = this.add.text(350,550,math.round(jeu.player.score));
        //si jeu non fini alors afficher le score des autres joueur
    },
    
    update:function(){
        // Gestion de la saisie du score
        if(Col == 0){
            if(clickBoutonHaut){
                a++;
                txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Alphabet[a]+" . ."); 
                clickBoutonHaut = false;
            }
            if(clickBoutonBas && a > 0){
                a--;
                txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Alphabet[a]+" . ."); 
                clickBoutonBas = false;

            }
        }
        if(Col == 1 ){
            if(clickBoutonHaut){
                a++;
                txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Pseudo +' '+Alphabet[a]+" ."); 
                clickBoutonHaut = false;
            }
            if(clickBoutonBas && a > 0){
                a--;
                txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Pseudo+' '+Alphabet[a]+" ."); 
                clickBoutonBas = false;
            }
        }
        if(Col == 2 ){
            if(clickBoutonHaut){
                a++;
                txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Pseudo +' '+Alphabet[a]+" "); 
                clickBoutonHaut = false;
            }
            if(clickBoutonBas && a > 0){
                a--;
                txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Pseudo+' '+Alphabet[a]+" "); 
            }
        }

        //sauvegarder la saisie
        if(Col == 0 & clickBoutonA){
            Col++;
            Pseudo = Alphabet[a];
            console.log("COL+");
            a = 10; 
            txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Pseudo+' '+Alphabet[a]+" .");
            clickBoutonA = false;
        }
        if(Col == 1 & clickBoutonA){
            Col++;
            Pseudo = Pseudo + " "+ Alphabet[a];
            a = 10;
            txt1.setText('ENTER YOUR \nPLAYER NAME ?\n'+Pseudo+' '+Alphabet[a]+" "); 
            console.log("COL+");
            clickBoutonA = false;
        }
        if(Col == 2 & clickBoutonA){
            
            Pseudo = Pseudo + " "+ Alphabet[a];
            console.log("Fin de la saisie");
            clickBoutonA = false;
           Col = 0;
           Score =  jeu.score;
           window.open('http://www.legroscarton.fr/game/score.php?pseudo='+Pseudo+'&score='+Score+'');
           jeu.score = 0;

           this.music.stop()

           jeu.scene.scene.start('SceneAccueil');

/*
            jeu.scene.load.crossOrigin = 'anonymous';
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
            console.log(this.responseText);
            }
            xhttp.open("GET", "http://www.legroscarton.fr/game/score.php?pseudo=jeu&score=666", true);
            xhttp.send();
            */

        }

        //gestion du pad
        pad.gestionPadUpdate();

    }


});