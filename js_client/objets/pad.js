var pad = {

    initpadScene: function(){
        //variable du gamepad  
         clickBoutonHaut = false;
         clickBoutonBas = false;
         clickBoutonDroit = false;
         clickBoutonGauche = false;
         clickBoutonA = false;
         clickBoutonB = false;
         clickBoutonStart = false;
         clickBoutonSelect = false;
         clickBoutonDroitBoutonA = false;
    },
    gestionPadCreate: function(){

        

          //ajout du pad à l'image
            BoutonHaut = jeu.scene.add.sprite(150,720,"padGB","flatDark02").setScale(1.3,1.3).setInteractive();
            BoutonHaut.setScrollFactor(0);
            
            BoutonBas = jeu.scene.add.sprite(150,840,"padGB","flatDark09").setScale(1.3,1.3).setInteractive();
            BoutonBas.setScrollFactor(0);

            BoutonDroit = jeu.scene.add.sprite(220,780,"padGB","flatDark05").setScale(1.3,1.3).setInteractive();
            BoutonDroit.setScrollFactor(0);

            BoutonGauche = jeu.scene.add.sprite(80,780,"padGB","flatDark04").setScale(1.3,1.3).setInteractive();
            BoutonGauche.setScrollFactor(0);

            BoutonB = jeu.scene.add.sprite(450,780,"padGB","flatDark36").setScale(1.3,1.3).setInteractive();
            BoutonB.setScrollFactor(0);

            BoutonA = jeu.scene.add.sprite(570,760,"padGB","flatDark35").setScale(1.3,1.3).setInteractive();
            BoutonA.setScrollFactor(0);

            BoutonStart = jeu.scene.add.sprite(250,1000,"padGB","flatDark41").setScale(1.3,1.3).setInteractive();
            BoutonStart.setScrollFactor(0);

            BoutonSelect = jeu.scene.add.sprite(420,1000,"padGB","flatDark42").setScale(1.3,1.3).setInteractive();
            BoutonSelect.setScrollFactor(0);


    },
    gestionPadUpdate: function(){
        
        //bouton A
        BoutonA.on("pointerdown",function(pointer1){
            clickBoutonA = true;
            BoutonA.setTint(0xff0000);
        });
        BoutonA.on("pointerdown",function(pointer2){
            clickBoutonA = true;
            BoutonA.setTint(0xff0000);
        });
        BoutonA.on("pointerup",function(){
            clickBoutonA = false;
            BoutonA.setTint(0xffffff);
        });
        BoutonA.on("pointerout",function(){
            clickBoutonA = false;
        });

        //bouton B

        BoutonB.on("pointerdown",function(pointer1){
            clickBoutonB = true;
        });
        BoutonB.on("pointerdown",function(pointer2){
            clickBoutonB = true;
        });
        BoutonB.on("pointerup",function(){
            clickBoutonB = false;
        });
        BoutonB.on("pointerout",function(){
            clickBoutonB = false;
        });

        //bouton Haut
        BoutonHaut.on("pointerdown",function(){
            clickBoutonHaut = true;
        });
        BoutonHaut.on("pointerup",function(){
            clickBoutonHaut = false;
        });
        BoutonHaut.on("pointerout",function(){
            clickBoutonHaut = false;
        });
        //bouton Bas
        BoutonBas.on("pointerdown",function(pointer1){
            clickBoutonBas = true;
            BoutonBas.setTint(0xff0000);
        });
        BoutonBas.on("pointerdown",function(pointer2){
            clickBoutonBas = true;
            BoutonBas.setTint(0xff0000);
        });
        BoutonBas.on("pointerup",function(){
            clickBoutonBas = false;
            BoutonBas.setTint(0xffffff);
        });
        BoutonBas.on("pointerout",function(){
            clickBoutonBas = false;
        });
        //bouton droit
        BoutonDroit.on("pointerdown",function(pointer1){
            clickBoutonDroit = true;
            BoutonDroit.setTint(0xff0000);
        });
        BoutonDroit.on("pointerdown",function(pointer2){
            clickBoutonDroit = true;
            BoutonDroit.setTint(0xff0000);
        });

        BoutonDroit.on("pointerup",function(){
            clickBoutonDroit = false;
            BoutonDroit.setTint(0xffffff);
        });
        BoutonDroit.on("pointerout",function(){
            clickBoutonDroit = false;
        });

        //bouton Gauche
        BoutonGauche.on("pointerdown",function(pointer1){
            clickBoutonGauche = true;
            BoutonGauche.setTint(0xff0000);
        });
        BoutonGauche.on("pointerdown",function(pointer2){
            clickBoutonGauche = true;
            BoutonGauche.setTint(0xff0000);
        })
        BoutonGauche.on("pointerup",function(){
            clickBoutonGauche = false;
            BoutonGauche.setTint(0xffffff);

        });
        BoutonGauche.on("pointerout",function(){
            clickBoutonGauche = false;
        });

        //bouton start
        BoutonStart.on("pointerdown",function(){
            clickBoutonStart = true;
        });
        BoutonStart.on("pointerup",function(){
            clickBoutonStart = false;
        });
        BoutonStart.on("pointerout",function(){
            clickBoutonStart = false;
        });
        //bouton select
        BoutonSelect.on("pointerdown",function(){
            clickBoutonSelect = true;
        });
        BoutonSelect.on("pointerup",function(){
            clickBoutonSelect = false;
        });
        BoutonSelect.on("pointerout",function(){
            clickBoutonSelect = false;
        });

    }
}