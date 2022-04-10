 var hud = {

     barreChargement : function(){
        //barre de //barre de chargement

         var progressBar = jeu.scene.add.graphics();
         var progressBox = jeu.scene.add.graphics(); 

        progressBox.fillStyle(0x808080, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        var width = jeu.scene.cameras.main.width;
        var height = jeu.scene.cameras.main.height;
        var loadingText = jeu.scene.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'LE GROS CARTON STUDIO',
        style: {
            font: '30px Mochi',
            fill: '#808080'
        }
        });
        loadingText.setOrigin(0.5, 0.5);

        jeu.scene.load.on('progress', function (value) {
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0x6a7a64, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });      
        jeu.scene.load.on('fileprogress', function (file) {
            console.log(file.src);
        });
        jeu.scene.load.on('complete', function () {
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });
    },

    ajusterTailleEcran: function(){
        var canvas = document.querySelector("canvas");
    
        var fenetreWidth = window.innerWidth;
        var fenetreHeight = window.innerHeight;
        var fenetreRation = fenetreWidth / fenetreHeight;
        var configRatio = config.width/config.height;
        if(fenetreRation < configRatio){
            canvas.style.width = fenetreWidth + "px";
            canvas.style.height = (fenetreWidth/configRatio) + "px";
        }
        else{
            canvas.style.width = (fenetreHeight * configRatio) + "px";
            canvas.style.height = fenetreHeight + "px";
        }
    },
    
    affichageTimer : function(){

    //affichage du timer

    timeText = {font: "24px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4}; 
    var policeTitre = {
        fontSize : "23px",
        color : "#000000",
        fontFamily : "Mochi"
    }

    timeText = jeu.scene.add.text(20,20,"",policeTitre);
    timeText.setScrollFactor(0);

    },

    affichageVie : function(){
        
      
    
        vieText = {font: "24px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4}; 
        var policeTitre = {
            fontSize : "43px",
            color : "#000000",
            fontFamily : "Mochi"
        }
    
        vieText = jeu.scene.add.text(400,20,"",policeTitre);
        vieText.setScrollFactor(0);
    
   },

   affichageMessage : function(Message){
        
    var MessageText = {font: "24px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4}; 
    var policeTitre = {
        fontSize : "43px",
        color : "#000000",
        fontFamily : "Mochi"
    }

    MessageText = jeu.scene.add.text(200,400,"",policeTitre);
    MessageText.setScrollFactor(0);
    MessageText.setText(Message);
    

}
}