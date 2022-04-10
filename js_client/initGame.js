var config = {
    type : Phaser.AUTO,
    backgroundColor: "#dbdbdb",
    width : 720,
    height : 1050,
    scene:[sceneIntro,sceneAccueil,Lv1,sceneGameOver,sceneScore],
    physics : {
        default :"arcade",
        arcade : {
            gravity : {y : 320},
            debug: false
        }
    },
    input :{
    activePointers:3,
    }
}



const game =  new Phaser.Game(config);
