var enemieTemplate = {

            createEnemie : function(posX,posY,range){
            var enemie = {
            aEnemie : null,
            debutEnemie : null,
            isAlive : null,
            groupeEnemie : null,
            fireRate : 1000,
            nextFire : 0,
            pv : 1,

        
            initEnemie : function(downLayer){
                this.aEnemie = jeu.scene.physics.add.sprite(posX,posY,"enemie","enemie_stand");
                this.groupeEnemie = jeu.scene.physics.add.group();
                this.isAlive = true;
                this.aEnemie.setOrigin(0.5,1);
                this.gererDeplacement();
                this.gererCollide(downLayer);
            },
            
            detruireEnemie : function(){
                this.isAlive = false;
                this.aEnemie.destroy();
            },


            gererDeplacement : function(){
                this.aEnemie.anims.play("enemieWalk");
                var tween = jeu.scene.tweens.add({
                    targets : this.aEnemie,
                    x : posX + range,
                    ease : "Linear",
                    duration : 1000 * range / 100,
                    yoyo : true,
                    repeat : -1,
                    onStart : function (){
                    },
                    onComplete :  function (){},
                    onYoyo : function (tween){tween.targets[0].flipX = !tween.targets[0].flipX},
                    onRepeat : function (){ 
                        tween.targets[0].flipX = !tween.targets[0].flipX;
                    },
                });
            
            },
            gererCollide : function(downLayer){
                jeu.scene.physics.add.collider(this.aEnemie,downLayer);
                jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.aEnemie,this.attackEnemie);
               // jeu.scene.physics.add.overlap(this.aZombie,jeu.arme.groupeProjectiles,this.attackZombie);

            },
            attackEnemie : function(player,enemie){
                if(jeu.player.isJumping){
                    enemie.pv = enemie.pv - 1;
                    //zombie.destroy();
                }
                else{
                    jeu.world.killPlayer();
                }
                enemie.pv = enemie.pv - 1;
                console.log('attack enemie');

            },
            tirEnemie : function(enemie,projectiles){
                    
                    enemie.destroy(); 
                    console.log("mort enemie");
            },


    }
    return enemie;
},


    generateEnemieAnimations : function(){
        jeu.scene.anims.create({
            key: "enemieWalk",
            frames : jeu.scene.anims.generateFrameNames("enemie",{prefix:"enemie_walk",start:1,end:2}),
            frameRate:6,
            repeat : -1
        });
        jeu.scene.anims.create({
            key: "enemieIdle",
            frames : [{key: "enemie",frame : "enemie_stand"},{key :"enemie",frame :"enemie_idle"}],
            frameRate:2,
            repeat : -1
        });
    },
}
