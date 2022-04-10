//variable du world

var world = {
    tilemap : null,
    tilemap128 : null,
    tileset2 : null,
    downLayer : null,
    downLayer128 : null,
    downLayer1282 : null,
    worldLayer : null,
    topLayer : null,
    topLayer128 : null,
    positionDebut : null,
    positionFin : null,
    score : 0,
    scoreText : null,
    mortText : null,
    finText : null,
    gameOver : false,
    gameWin : false,
    debutEnemie1 :null,
    debutEnemie2 :null,
    debutEnemie3 :null,
    enemies : [],
    blocs1 : [],
    blocs2 : [],
    blocs3 : [],
    blocs4 : [],
    blocs5 : [],
    blocs6 : [],
    blocs7 : [],
    items1 : [],
    items2 : [],
    items3 : [],
    items4 : [],
    items5 : [],
    items6 : [],

    laveLayer : null,


    initialiserWorld : function(){
    //initialisation du world personnalisé selon la scene
    if(jeu.scene.scene.key == 'SceneLv1'){
        this.tilemap = jeu.scene.make.tilemap({key: "map",tileWidth : 24, tileHeight : 20 });
    }
    if(jeu.scene.scene.key == 'SceneLv2'){
        this.tilemap = jeu.scene.make.tilemap({key: "map2",tileWidth : 32, tileHeight : 32 });
    }
    if(jeu.scene.scene.key == 'SceneLv3'){
        this.tilemap = jeu.scene.make.tilemap({key: "map3",tileWidth : 32, tileHeight : 32 });
    }

    //appel des object tiled

    this.tileset = this.tilemap.addTilesetImage("worldsheet","tiles");

    this.tileset2 = this.tilemap.addTilesetImage("worldsheet2","tiles2");
    this.topLayer1282 = this.tilemap.createLayer("top",this.tileset2,0,-92);
    this.topLayer128 = this.tilemap.createLayer("top2",this.tileset2,0,-92);



    this.downLayer = this.tilemap.createDynamicLayer("bot",this.tileset,0,0);
    this.worldLayer = this.tilemap.createLayer("world",this.tileset,0,0);
    

    this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);
    //this.topLayer = this.tilemap.createDynamicLayer("top",this.tileset,0,0);
    //this.positionZone = this.tilemap.findObject("Objects", obj => obj.name === "SpawnZone");
    this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "SpawnPlayer");
    //this.debutEnemy1 =  this.tilemap.findObject("Objects", obj => obj.name === "SpawnEnemy1");
    //this.debutEnemy2 =  this.tilemap.findObject("Objects", obj => obj.name === "SpawnEnemy2");
    //this.debutEnemy3 =  this.tilemap.findObject("Objects", obj => obj.name === "SpawnEnemy3");
    //this.positionfire =  this.tilemap.findObject("Objects", obj => obj.name === "Fire");
    this.positionFin =  this.tilemap.findObject("Objects", obj => obj.name === "FinLevel");
    this.positionZone =  this.tilemap.findObject("Objects", obj => obj.name === "Zone");
    //this.positionObstacle1 =  this.tilemap.findObject("Objects", obj => obj.name === "obstacle1");
    //this.positionObstacle2 =  this.tilemap.findObject("Objects", obj => obj.name === "obstacle2");
    //this.positionObstacle3 =  this.tilemap.findObject("Objects", obj => obj.name === "obstacle3");

    this.positionLave1 =  this.tilemap.findObject("Objects", obj => obj.name === "LavePosition1");
    this.positionLave2 =  this.tilemap.findObject("Objects", obj => obj.name === "LavePosition2");
    this.positionLave3 =  this.tilemap.findObject("Objects", obj => obj.name === "LavePosition3");
    this.positionLave4 =  this.tilemap.findObject("Objects", obj => obj.name === "LavePosition4");
    this.positionLave5 =  this.tilemap.findObject("Objects", obj => obj.name === "LavePosition5");

    this.plateform1=  this.tilemap.findObject("Objects", obj => obj.name === "plateform1");
    this.plateform23=  this.tilemap.findObject("Objects", obj => obj.name === "plateform23");

    this.positionPic1 =  this.tilemap.findObject("Objects", obj => obj.name === "pic1");
    this.positionPic2 =  this.tilemap.findObject("Objects", obj => obj.name === "pic2");
    this.positionPic3 =  this.tilemap.findObject("Objects", obj => obj.name === "pic3");
    this.positionPic4 =  this.tilemap.findObject("Objects", obj => obj.name === "pic4");



    for(i=0;i<1000;i=i+32){
    jeu.scene.add.sprite(this.positionLave1.x+i,this.positionLave1.y,"lave_stand","lave_stand");
    jeu.scene.add.sprite(this.positionLave2.x+i,this.positionLave2.y,"lave_stand","lave_stand");
    jeu.scene.add.sprite(this.positionLave3.x+i,this.positionLave3.y,"lave","lave").play('laveAnim');
    
    }





    },
    CreerAnimationDecor : function(){
        
            jeu.scene.anims.create({
                key: "laveAnim",
                frames : jeu.scene.anims.generateFrameNames("lave",{prefix:"lave",start:0,end:3}),
                frameRate:6,
                repeat : -1
            });

    },


    gestionBlocs : function(){
    //recuperation de la position des blocs
    for(x = 0;x < this.tilemap.width;x++){
        for(y=0;y<20;y++){
            indexPlatform = this.downLayer.getTileAt(x,y,true);
            if(indexPlatform.index == 1){
                this.blocs1.push(x+";"+y);
            }
            if(indexPlatform.index == 2){
                this.blocs2.push(x+";"+y);
            }
            if(indexPlatform.index == 3){
                this.blocs3.push(x+";"+y);
            }
            if(indexPlatform.index == 4){
                this.blocs4.push(x+";"+y);
            }
            if(indexPlatform.index == 5){
                this.blocs5.push(x+";"+y);
            }
            if(indexPlatform.index == 6){
                this.blocs6.push(x+";"+y);
            }
            if(indexPlatform.index == 7){
                this.blocs7.push(x+";"+y);
            }
        }
    }
    console.log("tableau bloc :"+this.blocs1);
    console.log("tableau bloc :"+this.blocs2);
    console.log("tableau bloc :"+this.blocs3);
    console.log("tableau bloc :"+this.blocs4);
    console.log("tableau bloc :"+this.blocs5);
    console.log("tableau bloc :"+this.blocs6);
    console.log("tableau bloc :"+this.blocs7);

    },

    gestionItems : function(){
        //recuperation de la position des blocs
        for(x = 0;x < this.tilemap.width;x++){
            for(y=0;y<20;y++){
                indexItem = this.overlapLayer.getTileAt(x,y,true);
                if(indexItem.index == 41){
                    this.items1.push(x+";"+y);
                }
                if(indexItem.index == 42){
                    this.items2.push(x+";"+y);
                }
                if(indexItem.index == 43){
                    this.items3.push(x+";"+y);
                }
                if(indexItem.index == 44){
                    this.items4.push(x+";"+y);
                }
                if(indexItem.index == 45){
                    this.items5.push(x+";"+y);
                }
                if(indexItem.index == 46){
                    this.items6.push(x+";"+y);
                }
            }
        }
        console.log("tableau item :"+this.items1);
        console.log("tableau item :"+this.items2);
        console.log("tableau item :"+this.items3);
        console.log("tableau item :"+this.items4);
        console.log("tableau item :"+this.items5);
        console.log("tableau item :"+this.items6);
        },
    //gestion des colisions avec les differents layer
    gererCollider : function(){
            this.downLayer.setCollisionByProperty({Colision : true});
            this.topLayer128.setCollisionByProperty({Colision : true});

            

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);

        this.overlapLayer.setTileIndexCallback(41,this.collectElement1,this); //id +1
        this.overlapLayer.setTileIndexCallback(42,this.collectElement1,this); //id +1
        this.overlapLayer.setTileIndexCallback(43,this.collectElement1,this); //id +1
        this.overlapLayer.setTileIndexCallback(44,this.collectElement1,this); //id +1
        this.overlapLayer.setTileIndexCallback(45,this.collectElement1,this); //id +1
        this.overlapLayer.setTileIndexCallback(46,this.collectElement1,this); //id +1
        this.overlapLayer.setTileIndexCallback(47,this.collectElement1,this); //id +1

        this.overlapLayer.setTileIndexCallback(51,this.collectGemme,this); //id +1
        this.overlapLayer.setTileIndexCallback(68,this.collectVie,this); //id +1
        this.overlapLayer.setTileIndexCallback(17,this.mortLave,this); //id +1
        
        jeu.scene.physics.add.collider(jeu.player.aPlayer,this.downLayer);
        jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.overlapLayer);
        jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.downLayer);
        jeu.scene.physics.add.collider(jeu.player.aPlayer,jeu.scene.pic1);





        // jeu.scene.physics.add.collider(jeu.zombieTemplate,this.downLayer);
        //jeu.scene.physics.add.overlap(jeu.zombieTemplate,jeu.player.aPlayer, this.attackZombie);

      this.overlapLayer.setTileIndexCallback(56,this.finLevel,this); //id +1
      this.overlapLayer.setTileIndexCallback(57,this.finLevel,this); //id +1


    },
    mortLave : function(){
        jeu.player.life = 0;
        jeu.player.score = 0;
    },
    //retirer les plateformes
    romovePlatform : function(bloc){
        //console.log("remove plateform");
        if(bloc == 1){
            for(i =0;i < this.blocs1.length;i++){
              //  console.log("bloc : "+this.blocs1[i]);
                const coordos = this.blocs1[i].split(';');
              //  console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);

            }
        }
        if(bloc == 2){
            for(i =0;i < this.blocs2.length;i++){
              //  console.log("bloc : "+this.blocs2[i]);
                const coordos = this.blocs2[i].split(';');
              //  console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(bloc == 3){
            for(i =0;i < this.blocs3.length;i++){
               // console.log("bloc : "+this.blocs3[i]);
                const coordos = this.blocs3[i].split(';');
               // console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(bloc == 4){
            for(i =0;i < this.blocs4.length;i++){
             //   console.log("bloc : "+this.blocs4[i]);
                const coordos = this.blocs4[i].split(';');
              //  console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(bloc == 5){
            for(i =0;i < this.blocs5.length;i++){
              //  console.log("bloc : "+this.blocs5[i]);
                const coordos = this.blocs5[i].split(';');
              //  console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(bloc == 6){
            for(i =0;i < this.blocs6.length;i++){
             //   console.log("bloc : "+this.blocs6[i]);
                const coordos = this.blocs6[i].split(';');
              //  console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(bloc == 7){
            for(i =0;i < this.blocs7.length;i++){
               // console.log("bloc : "+this.blocs7[i]);
                const coordos = this.blocs7[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.downLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }

    },


     //retirer les items
    romoveItem : function(item){
        //console.log("remove ITEM");
        if(item == 1){
            for(i =0;i < this.items1.length;i++){
                //console.log("item1 : "+this.items1[i]);
                const coordos = this.items1[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.overlapLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(item == 2){
            for(i =0;i < this.items2.length;i++){
                //console.log("item2 : "+this.items2[i]);
                const coordos = this.items2[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.overlapLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(item == 3){
            for(i =0;i < this.items3.length;i++){
                //console.log("item3 : "+this.items3[i]);
                const coordos = this.items3[i].split(';');
               // console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.overlapLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(item == 4){
            for(i =0;i < this.items4.length;i++){
                //console.log("item4 : "+this.items4[i]);
                const coordos = this.items4[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.overlapLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(item == 5){
            for(i =0;i < this.items5.length;i++){
                //console.log("item5 : "+this.items5[i]);
                const coordos = this.items5[i].split(';');
               // console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.overlapLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
        if(item == 6){
            for(i =0;i < this.items6.length;i++){
                //console.log("item6 : "+this.items6[i]);
                const coordos = this.items6[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                this.overlapLayer.removeTileAt(coordos[0],coordos[1]);
            }
        }
    },


    AddItem : function(item){
        //console.log("Ajout ITEM");
        if(item == 1){
            for(i =0;i < this.items1.length;i++){
                //console.log("iTEM 1 : "+this.items1[i]);
                const coordos = this.items1[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.overlapLayer.putTileAt(41, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }
        if(item == 2){
            for(i =0;i < this.items2.length;i++){
                ///console.log("iTEM 2 : "+this.items2[i]);
                const coordos = this.items2[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.overlapLayer.putTileAt(42, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }
        if(item == 3){
            for(i =0;i < this.items3.length;i++){
                //console.log("iTEM 3 : "+this.items3[i]);
                const coordos = this.items3[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.overlapLayer.putTileAt(43, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }
        if(item == 4){
            for(i =0;i < this.items4.length;i++){
                //console.log("iTEM 4 : "+this.items4[i]);
                const coordos = this.items4[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.overlapLayer.putTileAt(44, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }
        if(item == 5){
            for(i =0;i < this.items5.length;i++){
                //console.log("iTEM 5 : "+this.items5[i]);
                const coordos = this.items5[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.overlapLayer.putTileAt(45, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }
        if(item == 6){
            for(i =0;i < this.items6.length;i++){
                //console.log("iTEM 6 : "+this.items6[i]);
                const coordos = this.items6[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.overlapLayer.putTileAt(46, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }

    },

    AddPlatform : function(bloc){
        //console.log("Ajout plateform");
        if(bloc == 1){
            for(i =0;i < this.blocs1.length;i++){
                //console.log("bloc 1 : "+this.blocs1[i]);
                const coordos = this.blocs1[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                //const newbloc1 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);
                const tile = this.downLayer.putTileAt(1, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
            }
        }
        if(bloc == 2){
            for(i =0;i < this.blocs2.length;i++){
                //console.log("bloc : "+this.blocs2[i]);
                const coordos = this.blocs2[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                const tile = this.downLayer.putTileAt(2, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();
                //const newbloc2 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);


            }
        }
        if(bloc == 3){
            for(i =0;i < this.blocs3.length;i++){
                //console.log("bloc : "+this.blocs3[i]);
                const coordos = this.blocs3[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                const tile = this.downLayer.putTileAt(3, coordos[0], coordos[1]);
                tile.setCollision(true);
                //this.downLayer.renderDebug();
                
                //const newbloc3 = this.downLayer.putTileAt(1, coordos[0], coordos[1],true,this.downLayer);


            }
        }
        if(bloc == 4){
            for(i =0;i < this.blocs4.length;i++){
                //console.log("bloc : "+this.blocs4[i]);
                const coordos = this.blocs4[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                const tile = this.downLayer.putTileAt(4, coordos[0], coordos[1]);
                tile.setCollision(true);
              //  this.downLayer.renderDebug();

            }
        }
        if(bloc == 5){
            for(i =0;i < this.blocs5.length;i++){
                //console.log("bloc : "+this.blocs5[i]);
                const coordos = this.blocs5[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                const tile = this.downLayer.putTileAt(5, coordos[0], coordos[1]);
                tile.setCollision(true);
              //  this.downLayer.renderDebug();


            }
        }
        if(bloc == 6){
            for(i =0;i < this.blocs6.length;i++){
                //console.log("bloc : "+this.blocs6[i]);
                const coordos = this.blocs6[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                const tile = this.downLayer.putTileAt(6, coordos[0], coordos[1]);
                tile.setCollision(true);
               // this.downLayer.renderDebug();


            }
        }
        if(bloc == 7){
            for(i =0;i < this.blocs7.length;i++){
                //console.log("bloc : "+this.blocs7[i]);
                const coordos = this.blocs7[i].split(';');
                //console.log("x:"+coordos[0]+" y:"+coordos[1]);
                const tile = this.downLayer.putTileAt(7, coordos[0], coordos[1]);
                tile.setCollision(true);
                //this.downLayer.renderDebug();


            }
        }
        jeu.world.gererCollider();


    },
    //fonction pour verifier la fin du niveau
    finLevel : function(){
        console.log("verifi si fin");
            if(!this.gameOver){
                this.gameWin = true;

                //reinitialiser le player
                jeu.player.HauteurSaut = 0;
                jeu.player.Vitesse = 0;
                console.log("gagné");
                jeu.player.winPlayer();
                jeu.player.aPlayer.setVelocityX(0);
                jeu.player.aPlayer.setVelocityY(0);
                jeu.player.HauteurSaut = -300;
                jeu.player.Vitesse = 180;
                //jeu.scene.scene.start('SceneScore');

                //jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y,"panel").setScale(5,3);
                /*var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y+100,"validation").setInteractive();
                restartBouton.on("pointerup",function(){
                    //jeu.scene.scene.restart();
                    if(jeu.scene.scene.key == 'SceneLv1'){
                        jeu.scene.scene.start('SceneScore');
                    }
                    if(jeu.scene.scene.key == 'SceneLv2'){
                        jeu.scene.scene.start('SceneFinDuJeu');
                    }
                 });*/
                 var policeTitre = {
                    fontSize : "40px",
                    color : "#ffffff",
                    fontFamily : "Mochi"
                }
                //this.winText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x-200,jeu.scene.cameras.main.midPoint.y-100,"Tu as gagné \n Appuie sur start !",policeTitre);

                //jeu.scene.scene.start('SceneScore');
                jeu.world.gameWin = false;
                jeu.scene.scene.start('SceneScore');
                if(clickBoutonStart){
                    jeu.world.gameWin = false;
                    jeu.scene.scene.start('SceneScore');
                }
            }
    },

    //gestion de la camera
    gererCamera : function(){
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },

    //fonction pour collecter des points

    // CollectZone
    collectElement1 : function(player,tile){
        //jeu.scene.sound.play("gemmeSound");
        //this.genererParticules(tile.getCenterX(),tile.getCenterY());
        console.log("repousser la zone");
        jeu.lazone.reculerZone();
        jeu.world.romoveItem(1);    
        jeu.world.romoveItem(2);    
        jeu.world.romoveItem(3);    
        jeu.world.romoveItem(4);    
        jeu.world.romoveItem(5);    
        jeu.world.romoveItem(6);    
        jeu.scene.bonus.play()


    },
    collectVie : function(player,tile){
        //jeu.scene.sound.play("gemmeSound");
        this.genererParticules(tile.getCenterX(),tile.getCenterY());
        jeu.player.life = jeu.player.life + 1;
        console.log("ramasser une vie");
        this.overlapLayer.removeTileAt(tile.x,tile.y);
    },

    //fonction qui genere des particules
    genererParticules : function(posX,posY){
        var particules = jeu.scene.add.particles("spark");
        var configParticules = {
            x : posX,
            y : posY,
            speed: 200,
            angle : {
                min : 180,
                max : 360
            },
            lifeSpan : {
                min:300, 
                max:400
            },
            scale : {
                start : 0.1,
                end : 0.1
            },
            blendMode : "ADD"
        }
        var emitter = particules.createEmitter(configParticules);
        jeu.scene.time.delayedCall(300,function(){
            particules.destroy();
        })

    },

    //fonction pour tuer un zombie
    killEnemie : function(enemy,projectile){
        console.log("t'es morttt le zombieeeeeeeeeeeeeeeeee");
       // enemy.destroy();
    },

    //fonction pour tuer le joueur
    killPlayer : function(){
        //reinit le player
        jeu.scene.music.stop()

        console.log("init");
        jeu.player.HauteurSaut = -300;
        jeu.player.Vitesse = 180;
        jeu.scene.scoreMax =60;
        jeu.player.points = 0;
        jeu.world.score = 0;
        jeu.player.score = 60;
        jeu.scene.chrono =0;
        jeu,chrono = 0;
        console.log("mort?");
        console.log("score !!"+jeu.score );
        jeu.scene.scene.start('SceneScore');
   


        /*
        if(!this.gameOver){
            this.gameOver = true;
            console.log("VRAI MORT !");


      
            //jeu.player.killPlayer();
            if(jeu.player.life > 0)
            {
                pad.initpadScene();
                jeu.scene.scene.restart();
            }
            else{
               // jeu.scene.scene.start('sceneGameOver');
                
                pad.initpadScene();
                jeu.scene.scene.restart();
            }
            var policeTitre = {
                fontSize : "40px",
                color : "#ffffff",
                fontFamily : "Mochi"
            }
        }
        else{
            this.gameOver = false;
        }
        */
    },
}