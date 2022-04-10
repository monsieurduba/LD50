var zoneTemplate = {

    createZone : function(posX,posY,range){
        var zone = {
            aZone : null,
            debutZone : null,
            groupeZone: null,
            tween : null,

            initZone : function(downLayer){
                jeu.zoneTemplate.generateZoneAnimations();
                this.aZone  = jeu.scene.physics.add.sprite(posX,posY,"zone","zone_walk");
                this.gererDeplacement();

                this.groupeZone = jeu.scene.physics.add.group();
                this.aZone.setScale(1,0.9);

                //this.aZone.setOrigin(0.5,1);
                this.gererCollide(downLayer);

            },
            detruireZone : function(){
                this.aZone.destroy();
            },
            gererDeplacement : function(){
               // this.aZone.anims.play("zoneWalk");
                this.aZone.anims.play("zoneWalk");
                this.tween = jeu.scene.tweens.add({
                    targets : this.aZone,
                    x : posX + range,
                    y : posY +10,
                    ease : "Linear",
                    duration : 1000 * range / 10,
                    yoyo : true,
                    repeat : -1,
                    onStart : function (){},
                    onComplete : function (){},
                    onYoyo : function (tween){this.tween.targets[0].flipX = !this.tween.targets[0].flipX},
                    onRepeat : function (){ this.tween.targets[0].flipX = !this.tween.targets[0].flipX}
                });
            },
            gererCollide : function(downLayer){
                jeu.scene.physics.add.collider(this.aZone,downLayer);
                this.aZone.setCollideWorldBounds(true);
                jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.aZone,this.attackZone);
            },
            attackZone : function(player,zone){
                    jeu.world.killPlayer();
            },
            reculerZone : function(){
                // console.log("reculer la zone");
               // console.log(this.aZone);
                var old_zonex =this.aZone.x;
                var old_zoney = this.aZone.y;
                jeu.scene.nouvellezone(old_zonex-50,old_zoney);

                //this.aZone.setOrigin(this.aZone.x-10,this.aZone.y);
                this.aZone.destroy();

            },

        }
        return zone;
    },

    generateZoneAnimations : function(){
        jeu.scene.anims.create({
            key: "zoneWalk",
            frames : jeu.scene.anims.generateFrameNames("zone",{prefix:"zone_walk",start:0,end:2, suffix:'.png'}),
            frameRate:3,
            repeat : -1
        });
  
    },
}
