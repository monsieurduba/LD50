//niveau 1 du jeu

// variable de la scene 1
var bf1;
var MessageText;
//var vieText;
var timeText;
var monTimer;
var chrono = 0;
var scoreMax = 1;

var Lv1 = new Phaser.Class({

    //The scene is noted
    Extends: Phaser.Scene,
    
    initialize:

function GameScene ()
{
    Phaser.Scene.call(this, { key: 'SceneLv1'});
},

//preload des assets
preload: function ()
{

    jeu.scene = this;

    //Chargement du HUD
    hud.ajusterTailleEcran();
    hud.barreChargement();
    //hud.affichageVie();

     //preload du pad
    jeu.scene.load.atlas("padGB","padGB.png","padGB.json");
    jeu.scene.load.atlas("zone","zone.png","zoneAtlas.json");
    jeu.scene.load.image("pic","pic.png");
    jeu.scene.load.image("lave_stand","lave_stand.png");
    jeu.scene.load.atlas("go","go.png","go.json");

    jeu.scene.load.atlas("obstacle","obstacle.png","obstacleAtlas.json");
    jeu.scene.load.atlas("lave","lave.png","laveAtlas.json");
    //preload des images et atlas pour le lvl1
    jeu.scene.load.image("tiles","worldsheet.png");
    jeu.scene.load.image("tiles2","worldsheet2.png");

    jeu.scene.load.tilemapTiledJSON('map',"LV1.json");
    jeu.scene.load.atlas("player","player.png","playerAtlas.json");
    jeu.scene.load.atlas("player_jump","player_jump.png","player_jump.json");
    jeu.scene.load.atlas("player_stand","player_stand.png","player_stand.json");
    jeu.scene.load.atlas("player_win","playerwin.png","playerwin.json");

    jeu.scene.load.image("bloc1","bloc1.png");
    this.load.audio("music","music.mp3");
    jeu.scene.load.audio("jump","jump.mp3");
    jeu.scene.load.audio("bonus","bonus.mp3");

    //jeu.scene.load.atlas("enemie","enemie.png","enemieAtlas.json");

    //initialisation des variables du jeu au preload
    jeu.world.gameOver = false;
    jeu.player.isAlive = true;


    
},

create: function ()
{
    jeu.scene.music =  this.sound.add('music', {
        volume: 0.9,
        loop: true
    })

    jeu.scene.bonus =  this.sound.add('bonus', {
        volume: 1,
        loop: false
    })
    jeu.scene.jump =  this.sound.add('jump', {
        volume: 0.7,
        loop: false
    })

    jeu.scene.music.play()
    
    //ajouter le hud

    //affichage du timer


    //creation du pad
    pad.gestionPadCreate();

    //inialisation du world

    jeu.world.CreerAnimationDecor();
    jeu.world.initialiserWorld();
    //initialisation du player et des enemies et de sa position dans le level 1
    jeu.player.initialiserPlayer(jeu.world.positionDebut.x,jeu.world.positionDebut.y);
    jeu.world.gestionBlocs();
    jeu.world.gestionItems();

    //var enemy1 = jeu.enemieTemplate.createEnemie(jeu.world.debutEnemy1.x,jeu.world.debutEnemy1.y,60);
    //var enemy2 = jeu.enemieTemplate.createEnemie(jeu.world.debutEnemy2.x,jeu.world.debutEnemy2.y,60)
    //var enemy3 = jeu.enemieTemplate.createEnemie(jeu.world.debutEnemy3.x,jeu.world.debutEnemy3.y,60)
    //enemy1.initEnemie(jeu.world.downLayer);
    //enemy2.initEnemie(jeu.world.downLayer);
    //enemy3.initEnemie(jeu.world.downLayer);
    //ajout des enemies dans un tableau zombies
    //jeu.enemies.push(enemy1);
    //jeu.enemies.push(enemy2);
    //jeu.enemies.push(enemy3);

    //lancement des animations pour le level1
    jeu.player.generatePlayerAnimations();


    //On retire tous les blocs
    jeu.world.romovePlatform(1);
    jeu.world.romovePlatform(2);
    jeu.world.romovePlatform(3);
    jeu.world.romovePlatform(4);
    jeu.world.romovePlatform(5);
    jeu.world.romovePlatform(6);
    jeu.world.romovePlatform(7);
    
    jeu.world.romoveItem(1);
    jeu.world.romoveItem(2);
    jeu.world.romoveItem(3);
    jeu.world.romoveItem(4);
    jeu.world.romoveItem(5);
    jeu.world.romoveItem(6);

  //var lazone = jeu.zoneTemplate.createZone(jeu.world.positionZone.x,jeu.world.positionZone.y,6000).initZone(jeu.world.downLayer);
  jeu.lazone = jeu.zoneTemplate.createZone(jeu.world.positionZone.x,jeu.world.positionZone.y,6000);
  jeu.lazone.initZone(jeu.world.downLayer);
  console.log(jeu.lazone);
  //jeu.player.aPlayer.anims.play("playerWalk");

    //gerer les colisions pour le level1
    jeu.world.gererCollider();
    jeu.world.gererCamera();
    
    //creation du cursor pour les touches du pad
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();


    //timer pour gerer le score du lv1
    monTimer = jeu.scene.time.addEvent({
        delay: 1000,
        callback: this.compteUneSeconde,
        callbackScope: this,
        loop: true
    });
    hud.affichageTimer();

},
//creer une nouvelle zone
nouvellezone : function(POSX,POSY){
    console.log("NOUVELLE ZONE !!!")
    jeu.lazone = jeu.zoneTemplate.createZone(POSX,POSY,6000);
    jeu.lazone.initZone(jeu.world.downLayer);

},
//fonction pour le timer du lv1
compteUneSeconde : function() {
    chrono= chrono-1; // on incremente le chronometre d'une unite
    jeu.score = chrono  * -1;
},


//fonction du gere l'update de l'enemie : verif si mort ou non / 
gererUpdateEnemie : function(){
    jeu.zoneTemplate.generateZoneAnimations();
   
},
ajouterObstacle : function(){

    jeu.zoneTemplate.generateZoneAnimations();
    var obstacle1 = jeu.obstacleTemplate.createObstacle(jeu.world.positionObstacle1.x,jeu.world.positionObstacle1.y,0);
    obstacle1.initObstacle(jeu.world.downLayer);
    jeu.obstacles.push(obstacle1);
    
    var obstacle2 = jeu.obstacleTemplate.createObstacle(jeu.world.positionObstacle2.x,jeu.world.positionObstacle2.y,0);
    obstacle2.initObstacle(jeu.world.downLayer);
    jeu.obstacles.push(obstacle2);

    var obstacle3 = jeu.obstacleTemplate.createObstacle(jeu.world.positionObstacle3.x,jeu.world.positionObstacle3.y,0);
    obstacle3.initObstacle(jeu.world.downLayer);
    jeu.obstacles.push(obstacle3);
    console.log("apparition des obstacles");
    jeu.obstacleTemplate.generateObstacleAnimation();

},
ajouterPic : function(){
    console.log("apparition des pics");
    var pic1;
    var pic2;
    var pic3;
    var pic4;
    pic1 = jeu.scene.physics.add.sprite(jeu.world.positionPic1.x,jeu.world.positionPic1.y,"pic","pic");
    pic2 = jeu.scene.physics.add.sprite(jeu.world.positionPic2.x,jeu.world.positionPic2.y,"pic","pic");
    pic3 = jeu.scene.physics.add.sprite(jeu.world.positionPic3.x,jeu.world.positionPic3.y,"pic","pic");
    pic4 = jeu.scene.physics.add.sprite(jeu.world.positionPic4.x,jeu.world.positionPic4.y,"pic","pic");
    pic1.setCollideWorldBounds(true);
    pic2.setCollideWorldBounds(true);
    pic3.setCollideWorldBounds(true);
    pic4.setCollideWorldBounds(true);
    jeu.scene.physics.add.collider(pic1,jeu.world.downLayer);
    jeu.scene.physics.add.collider(pic2,jeu.world.downLayer);
    jeu.scene.physics.add.collider(pic3,jeu.world.downLayer);
    jeu.scene.physics.add.collider(pic4,jeu.world.downLayer);
    jeu.scene.physics.add.overlap(jeu.player.aPlayer,pic1,jeu.world.killPlayer);
    jeu.scene.physics.add.overlap(jeu.player.aPlayer,pic2,jeu.world.killPlayer);
    jeu.scene.physics.add.overlap(jeu.player.aPlayer,pic3,jeu.world.killPlayer);
    jeu.scene.physics.add.overlap(jeu.player.aPlayer,pic4,jeu.world.killPlayer);
},
randomIntFromInterval : function (min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
},

update: function (time,delta){

    //appel les updates
    //this.gererUpdateEnemie();
    //update du timer et verif si player pas mort
    if(jeu.player.win != false){
        //jeu.player.aPlayer.setVelocityY(0);
        console.log("gagne");
        monTimer.reset({paused : true}); 
    }
    else{
      // console.log("pas encore gagne");
    }
    if(jeu.player.isAlive){
    //vieText.setText("Vie :" + jeu.player.life)
    // monTimer.reset({paused : false}); 
    jeu.player.score = Math.round(scoreMax - chrono + jeu.player.points);
    timeText.setText("Score : " +  jeu.player.score);
    //vieText.setText("Vie : " + (jeu.player.life-1));

    if(jeu.player.life == 0 || jeu.player.score == 0){
        monTimer.reset({paused : true}); 
        //hud.affichageMessage("GAME OVER\n");

        jeu.player.killPlayer();
        jeu,chrono = 0;
        pad.initpadScene();
        jeu.scene.scene.restart();
    }
    else{
    }

    }
    else{
        if(clickBoutonStart){
            jeu.scene.scene.restart('SceneAccueil');
        }
        monTimer.reset({paused : true}); 
    }

    //gerer l'update du pad
    pad.gestionPadUpdate();
    player.gestionPadPlayer();

    //gerer les deplacements du joueur à chaque update
    jeu.player.gererDeplacement();

    if(jeu.player.isAlive){
        jeu.player.gererDeplacement();
    }

    // ajuster la taille de l'ecran
    hud.ajusterTailleEcran();

    //affichage et disparition des blocs
    RandomPlatform = this.randomIntFromInterval(1,1000);
    //console.log("on retirer la plateform num : "+RandomPlatform);
    jeu.world.romovePlatform(RandomPlatform);

    RandomPlatform = this.randomIntFromInterval(1,1000);
    //console.log("num :"+RandomPlatform);
    jeu.world.AddPlatform(RandomPlatform);

    RandomItem = this.randomIntFromInterval(1,1000);
    //console.log("on retirer la plateform num : "+RandomItem);
    jeu.world.romoveItem(RandomPlatform);

    RandomItem = this.randomIntFromInterval(1,1000);
    //console.log("num :"+RandomItem);
    jeu.world.AddItem(RandomItem);

},



});

