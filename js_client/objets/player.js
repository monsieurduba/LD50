//PARAMETRE DU JOUEUR
var player = {
    aPlayer : null,
    isJumping : null,
    isFire : null,
    isAlive : true,
    direction: "right",
    life : 3,
    score : 0,
    points : 0,
    win : false,
    HauteurSaut : -300,
    Vitesse : 180,

    //INITALISATION DU SPRITE DU JOUEUR
    initialiserPlayer : function(positionX,positionY){

        //si la vie du player est à 0 alors on lui remet de la vie et on remet à zero son score
        if(this.life == 0){
            this.life = 3;
            this.score = 0;
        }
        else{
            this.score = 0;
            this.points = 0;

        }

        this.aPlayer = jeu.scene.physics.add.sprite(positionX,positionY,"player");
        this.aPlayer.setScale(1,0.9);

        //SPRITE AVEC COLISION        
        this.aPlayer.setCollideWorldBounds(true);
        //POINT SPAWN
        this.aPlayer.setOrigin(0.5,1);

    },
    //destruction du joueur
    detruirePlayer : function(){
        this.aPlayer.destroy();
    },

    //FONCTION POUR GERER LE CHARGEMENT DES ANIMATIONS
    generatePlayerAnimations : function(){
        jeu.scene.anims.create({
            key: "playerWalk",
            frames : jeu.scene.anims.generateFrameNames("player",{prefix:"player",start:0,end:3, suffix:'.png'}),
            frameRate:16,
            repeat : -1
        });
        jeu.scene.anims.create({
            key: "playerJump",
            frames : jeu.scene.anims.generateFrameNames("player_jump",{prefix:"player_jump",start:0,end:3, suffix:'.png'}),
            frameRate:12,
            repeat : -1
        });
        jeu.scene.anims.create({
            key: "playerStand",
            frames : jeu.scene.anims.generateFrameNames("player_stand",{prefix:"player_stand",start:0,end:9, suffix:'.png'}),
            frameRate:1,
            repeat : -1
        });
        jeu.scene.anims.create({
            key: "playerWin",
            frames : jeu.scene.anims.generateFrameNames("player_win",{prefix:"playerwin",start:0,end:10, suffix:'.png'}),
            frameRate:10,
            repeat : -1
        });
    /*    jeu.scene.anims.create({
            key: "playerIdle",
            frames : [{key: "player",frame : "adventurer_stand"},{key :"player",frame :"adventurer_idle"}],
            frameRate:2,
            repeat : -1
        });
        jeu.scene.anims.create({
            key: "adventurer_slide",
            frames : [{key: "player",frame : "adventurer_slide"},{key :"player",frame :"adventurer_slide"}],
            frameRate:2,
            repeat : -1
        });*/
    },

    
    tirer : function(player){
    var coefDir;
    if (player.direction == 'left') { coefDir = -1; } else { coefDir = 1 }
    // on crée la balle a coté du joueur
    var Projectiles = jeu.arme.groupeProjectiles.create(jeu.player.aPlayer.x + (40 * coefDir), jeu.player.aPlayer.y -50, 'bullet');
    // parametres physiques de la balle.
    Projectiles.setCollideWorldBounds(true);
    Projectiles.body.bounce.setTo(1, 1);
    Projectiles.body.allowGravity =true;
    Projectiles.setVelocity(400 * coefDir, 0); // vitesse en x et en y
    //detruire la ball au bout de 3 secondes
    jeu.scene.time.addEvent({ delay: 500, loop: true, callback: () => Projectiles.destroy() })
    },
    
    gestionPadPlayer: function(){
        //GESTION DES ACTIONS SELON LES TOUCHES
        //Si le joueur est en vie
        if(this.isAlive){
            if(clickBoutonA && this.aPlayer.body.onFloor()){
                jeu.player.aPlayer.setVelocityY(jeu.player.HauteurSaut);
                jeu.player.aPlayer.anims.play("playerJump",true);

            }
            if(clickBoutonB){
                if(!this.isFire){
                   // jeu.player.tirer(jeu.player);
                   /// this.isFire = true;
                   //console.log("feu : "+this.isFire);
                }
                else{
                  //  this.isFire = true;
                }
            }
            if(!clickBoutonB){
            //    this.isFire = false;  
            }
            if(clickBoutonDroit ){
                jeu.player.aPlayer.setVelocityX(jeu.player.Vitesse);
                this.direction = "right";

            }
            else if(clickBoutonGauche){
                jeu.player.aPlayer.setVelocityX(-jeu.player.Vitesse);
                this.direction = "left";
            }
            else{
                jeu.player.aPlayer.setVelocityX(0);
                if(jeu.world.gameWin){
                    jeu.player.aPlayer.anims.play("playerWin",true);
                    timeText.setText("Press Start to continue");
                }
                else{
                jeu.player.aPlayer.anims.play("playerStand",true);
                }
            }

            // GESTION DES SPRITES SELON LES TOUCHES

            if(clickBoutonGauche && this.aPlayer.body.onFloor()){
                jeu.player.aPlayer.anims.play("playerWalk",true);
                jeu.player.aPlayer.setFlip(true,false);
            }
            else if(clickBoutonDroit && this.aPlayer.body.onFloor()){
                jeu.player.aPlayer.anims.play("playerWalk",true);
                jeu.player.aPlayer.setFlip(false,false);
            }
            if(clickBoutonGauche && this.aPlayer.body.onFloor() == false){
                jeu.player.aPlayer.anims.play("playerJump",true);
                jeu.player.aPlayer.setFlip(true,false);
            }
            else if(clickBoutonDroit && this.aPlayer.body.onFloor() == false){
                jeu.player.aPlayer.anims.play("playerJump",true);
                jeu.player.aPlayer.setFlip(false,false);
            }
            else if(clickBoutonBas){
        ///        jeu.player.aPlayer.anims.play("adventurer_slide",true);
            }
            else{
     //           jeu.player.aPlayer.anims.play("playerIdle",true);

            }
        }
    },

    //GESTION DES DEPLACEMENT DU JOUEUR
    gererDeplacement : function(){
        //Si le joueur est en vie
        if(this.isAlive){
           //si le joueur touche le sol alors il ne saute pas
            if(this.aPlayer.body.onFloor()){
                this.isJumping = false;
            }
            //sinon il est saute alors on desactive le bouton A pour éviter le double saut
            else{
                this.isJumping = true;
                clickBoutonA = false;
            }
            //si il saute alors on met l'animation du saut 
            if(this.isJumping){
                jeu.scene.jump.play()
                //jeu.player.aPlayer.anims.play("playerJump",true);
            }
        }
  

        
    },
    //fonction pour tuer le joueur
    killPlayer : function(){
        console.log("MORT PLAYER");
        jeu.scene.music.stop()

    //    jeu.player.aPlayer.setTexture("player","adventurer_hurt");
        jeu.player.aPlayer.setVelocityX(0);
        jeu.player.aPlayer.setVelocityY(0);
        this.isAlive = false;
        this.life--;
        this.detruirePlayer();

        console.log("life : "+this.life);
    /*    if(this.life == 0){
            console.log("game_over");
            this.detruirePlayer();
            jeu.scene.scene.start('SceneGameOver');

        } */
    },
    //fonction pour animation win
    winPlayer : function(){
    //    jeu.player.aPlayer.setTexture("player","adventurer_hurt");
        jeu.player.aPlayer.setVelocityX(0);
        jeu.player.aPlayer.setVelocityY(0);
        jeu.player.win = true;
        jeu.player.aPlayer.anims.play("playerWin",true);

        //this.isAlive = false;
    }
}