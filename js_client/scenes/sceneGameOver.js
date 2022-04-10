var jeu = {
    scene : null,
    world : world,
    player: player,
    hud : hud,
    cursor : null,
}
// Générique debut du jeu
var sceneGameOver = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'SceneGameOver' });
    },

    preload: function ()
    {
        jeu.scene = this;
        //ajout atlas du pad
        jeu.scene.load.atlas("padGB","padGB.png","padGB.json");

    },

    create: function ()
    { 
        //creation des boutons du pad
        pad.gestionPadCreate();
        pad.initpadScene();
        console.log("game over");
        console.log(jeu.player);
        var txt1 = this.add.text(350,500, 'GAME OVER'); 
        //si jeu fini alors demander pseudo au joueur
        //var txt2 = this.add.text(350,550,math.round(jeu.player.score));
        //si jeu non fini alors afficher le score des autres joueur
    },
    
    update:function(){
          //gestion du pad
          pad.gestionPadUpdate();
          if(clickBoutonStart){
            jeu.scene.scene.start('SceneAccueil');
        }
    }


});