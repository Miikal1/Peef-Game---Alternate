// See README for team, game name, breakdown, notes, etc.

let config = {
    type: Phaser.Canvas,
    //Game Canvas scales with width and height of window
    //width: window.innerWidth * window.devicePixelRatio * 0.75,
    //height: window.innerHeight * window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    width: 1600,
    height: 900,
    scene: [Title, Credits, BedRoomTutorial, ClosetTutorial,
    InventoryDay1, LivingRoomDay1, DiningRoomDay1, StairRoomDay1, TVRoomDay1, KitchenDay1, KitchenBackDay1, FrontDoorRoomDay1, FishTankRoomDay1, UpStairRoomDay1, HallWayDay1, WayEndDay1, BedRoomDay1, ClosetDay1, BathRoomDay1, LaundryRoomDay1, PlayRoomDay1,
    InventoryDay2, LivingRoomDay2, DiningRoomDay2, StairRoomDay2, TVRoomDay2, KitchenDay2, FrontDoorRoomDay2, FishTankRoomDay2, UpStairRoomDay2, HallWayDay2, WayEndDay2, BedRoomDay2, ClosetDay2, BathRoomDay2, LaundryRoomDay2, PlayRoomDay2]
};

let keyA, keyD, keyW, keyS, keyR, keyT, keyQ, keyG;

let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let inventory = [];

let gloabalGameState = {};

// day 1 quests
let tutorial = "inactive";
let sewQuest = "inactive";
let tvQuest = "inactive";
let warQuest = "inactive";
let doctorQuest = "inactive";

// day 2 quests
let pickingQuest = "inactive";
let squeezeQuest = "inactive";
let deliveryQuest = "inactive";
let safeQuest = "inactive";
let fishFoodQuest = "inactive";
let towerQuest = "inactive";

// day 3 quests
let bucketQuest = "inactive";
let washerQuest = "inactive";
let tubQuest = "inactive";
let stinkyQuest = "inactive";
let vacuumQuest = "inactive";
let wipeQuest = "inactive";

// day 4 quests
let voteQuest = "inactive";
let snackQuest = "inactive";
let carpetQuest = "inactive";
let placementQuest = "inactive";
let fishtankQuest = "inactive";
let ceilingQuest = "inactive";
let woodQuest = "inactive";
let metalQuest = "inactive";

// day 5 quests
let armorQuest = "inactive";
let beastQuest = "inactive";
let grumpyQuest = "inactive";
let slingshotQuest = "inactive";
let springloadQuest = "inactive";
let monkQuest = "inactive";
let barbarianQuest = "inactive";
let wizardQuest = "inactive";
let rogueQuest = "inactive";
let healQuest = "inactive";
let bardQuest = "inactive";

// day 6 quests

let danceFloorQuest = "inactive";
let speakerQuest = "inactive";
let pizzaQuest = "inactive";
let eggQuest = "inactive";
let bowlQuest = "inactive";
let landingQuest = "inactive";
let twisterQuest = "inactive";
let darkQuest = "inactive";
let performancePrep = "inactive";
let performance1 = "inactive";
let performance2 = "inactive";
let performance3 = "inactive";
let performance4 = "inactive";
let performance5 = "inactive";
let performance6 = "inactive";

// day 7 quests

let cleanupQuest = "inactive";
let refillQuest = "inactive";
let pancakeQuest = "inactive";
let balconyQuest = "inactive";
let banditQuest = "inactive";
let gameQuest = "inactive";
let teacherQuest = "inactive";
let pokemonQuest = "inactive";
let photoQuest = "inactive";
let crayonQuest = "inactive";
let paintQuest = "inactive";

// tutorial booleans
let triedDoor = false;
let askScally = false;
let askSnowWing = false;
let note = false;
let foundKey = false;

// sewQuest booleans
let ropeLadder = false;

let game = new Phaser.Game(config);
//game.config.inventory = [null, null, null, null, null, null, null, null, null, null];

//let Audio = new AudioManager;
//let Track1StemNames = ['Normal', 'Filtered'];
//let Track1StemFileNames = ['assets/music/Track 01 - Normal.mp3', 'assets/music/Track 01 - Filtered.mp3'];

//let playerMoveStartSounds = 5;
//let playerMoveContSounds = 6;

// global variable to keep track of checkpoint outside of play scene
//let holeStartID = 1;

// global const for 0 scale, because you can't actually have 0 scale
//const ZEROSCALE = 0.000001;
