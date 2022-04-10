var obstacleTemplate = {

    createObstacle : function(posX,posY,range){
        var obstacle = {
            aObstacle : null,
            debutObstacle : null,
            groupeObstacle: null,

            initObstacle : function(downLayer){
                this.aObstacle  = jeu.scene.physics.add.sprite(posX,posY,"obstacle","obstacleWalk");
                this.groupeObstacle = jeu.scene.physics.add.group();
                this.gererDeplacement();
                this.aObstacle.setOrigin(0.5,1);
                this.gererCollide(downLayer);
            },
            detruireObstacle : function(){
                this.aObstacle.destroy();
            },
            gererDeplacement : function(){
                this.aObstacle.anims.play("obstacleWalk");
                var tween = jeu.scene.tweens.add({
                    targets : this.aObstacle,
                    x : posY,
                    ease : "Lineare",
                    duration : 10 * range / 1000,
                    yoyo : true,
                    repeat : -1,
                    onStart : this.gererSaut(),
                    onComplete :  this.gererSaut(),
                    onYoyo :function (){
                    //    tween.targets[0].flipY = !tween.targets[0].flipY;
                    },
                    onRepeat : function (){ 
                    },
                });
                
            },
            gererSaut : function(){
                this.aObstacle.setVelocityY(-600);

            },
      
            
            gererCollide : function(downLayer){
            //    jeu.scene.physics.add.collider(this.aObstacle,downLayer);
                this.aObstacle.setCollideWorldBounds(true);
                jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.aObstacle,this.attackObstacle);
            },
            attackObstacle : function(player,obstacle){
                    jeu.world.killPlayer();
            },
        }
        return obstacle;
    },
    generateObstacleAnimation : function(){
        jeu.scene.anims.create({
            key: "obstacleWalk",
            frames : jeu.scene.anims.generateFrameNames("obstacle",{prefix:"obstacle",start:0,end:2, suffix:'.png'}),
            frameRate:5,
            repeat : -1
        });
        jeu.scene.anims.create({
            key: "obstacleRun",
            frames : [{key: "obstacle",frame : "obstacle"},{key :"obstacle",frame :"obstacle_run"}],
            frameRate:2,
            repeat : -1
        });
    },
}
