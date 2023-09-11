class Inventory extends Phaser.Scene {
    constructor() {
        super('inventory');
    }

    preload(){

        this.load.image('inventory', "assets/inventory.png");
        this.load.image('emptySlot', "assets/emptySlot.png");
        this.load.image('inventoryCursor', "assets/inventoryCursor.png");
        this.load.image('needle', "assets/needle.png");
        this.load.image('ropeCoil', "assets/ropeCoil.png");
        this.load.image('spool', "assets/spool.png");
        this.load.image('cardDeck', "assets/cardDeck.png");
        this.load.image('battery', "assets/battery.png");
        this.load.image('stephascope', "assets/stephascope.png");
        this.load.image('medBag', "assets/medBag.png");
        this.load.image('shot', "assets/shot.png");
        this.load.image('key', "assets/key.png");

    }    

    create(){

        let width = config.width;
        let height = config.height;
        this.physics.world.gravity.y = 1000;

        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'inventory').setOrigin(0,0);

        //slots

        this.slot1 = this.physics.add.sprite(180, 150, 'emptySlot');
        this.slot1.body.immovable = true;
        this.slot1.body.allowGravity = false;

        this.slot2 = this.physics.add.sprite(420, 150, 'emptySlot');
        this.slot2.body.immovable = true;
        this.slot2.body.allowGravity = false;

        this.slot3 = this.physics.add.sprite(660, 150, 'emptySlot');
        this.slot3.body.immovable = true;
        this.slot3.body.allowGravity = false;

        this.slot4 = this.physics.add.sprite(900, 150, 'emptySlot');
        this.slot4.body.immovable = true;
        this.slot4.body.allowGravity = false;

        this.slot5 = this.physics.add.sprite(1140, 150, 'emptySlot');
        this.slot5.body.immovable = true;
        this.slot5.body.allowGravity = false;

        this.slot6 = this.physics.add.sprite(1380, 150, 'emptySlot');
        this.slot6.body.immovable = true;
        this.slot6.body.allowGravity = false;

        this.slot7 = this.physics.add.sprite(180, 350, 'emptySlot');
        this.slot7.body.immovable = true;
        this.slot7.body.allowGravity = false;

        this.slot8 = this.physics.add.sprite(420, 350, 'emptySlot');
        this.slot8.body.immovable = true;
        this.slot8.body.allowGravity = false;

        this.slot9 = this.physics.add.sprite(660, 350, 'emptySlot');
        this.slot9.body.immovable = true;
        this.slot9.body.allowGravity = false;

        this.slot10 = this.physics.add.sprite(900, 350, 'emptySlot');
        this.slot10.body.immovable = true;
        this.slot10.body.allowGravity = false;

        this.slot11 = this.physics.add.sprite(1140, 350, 'emptySlot');
        this.slot11.body.immovable = true;
        this.slot11.body.allowGravity = false;

        this.slot12 = this.physics.add.sprite(1380, 350, 'emptySlot');
        this.slot12.body.immovable = true;
        this.slot12.body.allowGravity = false;

        this.slot13 = this.physics.add.sprite(180, 550, 'emptySlot');
        this.slot13.body.immovable = true;
        this.slot13.body.allowGravity = false;

        this.slot14 = this.physics.add.sprite(420, 550, 'emptySlot');
        this.slot14.body.immovable = true;
        this.slot14.body.allowGravity = false;

        this.slot15 = this.physics.add.sprite(660, 550, 'emptySlot');
        this.slot15.body.immovable = true;
        this.slot15.body.allowGravity = false;

        this.slot16 = this.physics.add.sprite(900, 550, 'emptySlot');
        this.slot16.body.immovable = true;
        this.slot16.body.allowGravity = false;

        this.slot17 = this.physics.add.sprite(1140, 550, 'emptySlot');
        this.slot17.body.immovable = true;
        this.slot17.body.allowGravity = false;

        this.slot18 = this.physics.add.sprite(1380, 550, 'emptySlot');
        this.slot18.body.immovable = true;
        this.slot18.body.allowGravity = false;

        this.cursor = this.physics.add.sprite(180, 150, 'inventoryCursor');
        this.cursor.body.immovable = true;
        this.cursor.body.allowGravity = false;

                    //1     2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18  
        this.pack = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];

        this.line1 = this.add.text(880, 790, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
        this.line2 = this.add.text(880, 840, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);

        this.talking = false;

        this.spotX = 180;
        this.spotY = 150;
        this.placeCounter = 0;

    }

    update(){

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.talking = false;
            this.scene.switch(gloabalGameState.currentScene);
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyA) && this.cursor.x != 180) {
            this.talking = false;
            this.cursor.x = this.cursor.x - 240;
        }
        else if(Phaser.Input.Keyboard.JustDown(this.keyD) && this.cursor.x != 1380) {
            this.talking = false;
            this.cursor.x = this.cursor.x + 240;
        }
        
        else if(Phaser.Input.Keyboard.JustDown(this.keyW) && this.cursor.y != 150) {
            this.talking = false;
            this.cursor.y = this.cursor.y - 200;
        }

        else if(Phaser.Input.Keyboard.JustDown(this.keyS) && this.cursor.y != 550) {
            this.talking = false;
            this.cursor.y = this.cursor.y + 200;
        }

        // find
        if (this.has("key") && tutorial != "complete" && this.pack.indexOf("key") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "key";
                    console.log("happened");
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("needleOne") && sewQuest != "complete" && this.pack.indexOf("needleOne") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "needleOne";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("needleTwo") && sewQuest != "complete" && this.pack.indexOf("needleTwo") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "needleTwo";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("spool") && sewQuest != "complete" && this.pack.indexOf("spool") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "spool";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("rope") && sewQuest != "complete" && this.pack.indexOf("rope") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "rope";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("cards") && warQuest != "complete" && this.pack.indexOf("cards") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "cards";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("batteryOne") && tvQuest != "complete" && this.pack.indexOf("batteryOne") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "batteryOne";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("batteryTwo") && tvQuest != "complete" && this.pack.indexOf("batteryTwo") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "batteryTwo";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("shot") && doctorQuest != "complete" && this.pack.indexOf("shot") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "shot";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("medBag") && doctorQuest != "complete" && this.pack.indexOf("medBag") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "medBag";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        if (this.has("stephascope") && doctorQuest != "complete" && this.pack.indexOf("stephascope") == -1){
            this.count = 0;
            while (this.count < 18){
                if (this.pack[this.count] == null){
                    this.pack[this.count] = "stephascope";
                    break;
                }
                else {
                    this.count += 1;
                }
            }
        }

        // slot 0
        if(this.pack[0] != null){
            if (this.pack[0] == "key" && this.key == null){
                this.key = this.physics.add.sprite(180, 150, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(180, 150, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(180, 150, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(180, 150, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(180, 150, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(180, 150, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(180, 150, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(180, 150, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(180, 150, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(180, 150, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[0] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(180, 150, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        
        // slot 1
        if(this.pack[1] != null){
            if (this.pack[1] == "key" && this.key == null){
                this.key = this.physics.add.sprite(420, 150, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(420, 150, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(420, 150, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(420, 150, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(420, 150, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(420, 150, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(420, 150, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(420, 150, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(420, 150, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(420, 150, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[1] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(420, 150, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 2
        if(this.pack[2] != null){
            if (this.pack[2] == "key" && this.key == null){
                this.key = this.physics.add.sprite(660, 150, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(660, 150, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(660, 150, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(660, 150, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(660, 150, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(660, 150, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(660, 150, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(660, 150, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(660, 150, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(660, 150, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[2] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(660, 150, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 3
        if(this.pack[3] != null){
            if (this.pack[3] == "key" && this.key == null){
                this.key = this.physics.add.sprite(900, 150, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(900, 150, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(900, 150, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(900, 150, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(900, 150, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(900, 150, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(900, 150, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(900, 150, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(900, 150, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(900, 150, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[3] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(900, 150, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 4
        if(this.pack[4] != null){
            if (this.pack[4] == "key" && this.key == null){
                this.key = this.physics.add.sprite(1140, 150, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(1140, 150, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(1140, 150, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(1140, 150, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(1140, 150, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(1140, 150, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(1140, 150, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(1140, 150, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(1140, 150, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(1140, 150, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[4] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(1140, 150, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 5
        if(this.pack[5] != null){
            if (this.pack[5] == "key" && this.key == null){
                this.key = this.physics.add.sprite(1380, 150, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(1380, 150, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(1380, 150, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(1380, 150, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(1380, 150, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(1380, 150, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(1380, 150, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(1380, 150, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(1380, 150, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(1380, 150, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[5] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(1380, 150, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 6
        if(this.pack[6] != null){
            if (this.pack[6] == "key" && this.key == null){
                this.key = this.physics.add.sprite(180, 350, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(180, 350, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(180, 350, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(180, 350, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(180, 350, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(180, 350, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(180, 350, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(180, 350, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(180, 350, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(180, 350, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[6] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(180, 350, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 7
        if(this.pack[7] != null){
            if (this.pack[7] == "key" && this.key == null){
                this.key = this.physics.add.sprite(420, 350, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(420, 350, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(420, 350, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(420, 350, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(420, 350, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(420, 350, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(420, 350, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(420, 350, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(420, 350, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(420, 350, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[7] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(420, 350, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 8
        if(this.pack[8] != null){
            if (this.pack[8] == "key" && this.key == null){
                this.key = this.physics.add.sprite(660, 350, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(660, 350, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(660, 350, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(660, 350, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(660, 350, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(660, 350, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(660, 350, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(660, 350, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(660, 350, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(660, 350, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[8] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(660, 350, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 9
        if(this.pack[9] != null){
            if (this.pack[9] == "key" && this.key == null){
                this.key = this.physics.add.sprite(900, 350, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(900, 350, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(900, 350, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(900, 350, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(900, 350, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(900, 350, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(900, 350, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(900, 350, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(900, 350, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(900, 350, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[9] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(900, 350, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 10
        if(this.pack[10] != null){
            if (this.pack[10] == "key" && this.key == null){
                this.key = this.physics.add.sprite(1140, 350, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(1140, 350, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(1140, 350, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(1140, 350, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(1140, 350, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(1140, 350, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(1140, 350, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(1140, 350, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(1140, 350, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(1140, 350, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[10] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(1140, 350, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 11
        if(this.pack[11] != null){
            if (this.pack[11] == "key" && this.key == null){
                this.key = this.physics.add.sprite(1380, 350, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(1380, 350, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(1380, 350, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(1380, 350, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(1380, 350, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(1380, 350, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(1380, 350, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(1380, 350, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(1380, 350, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(1380, 350, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[11] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(1380, 350, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 12
        if(this.pack[12] != null){
            if (this.pack[12] == "key" && this.key == null){
                this.key = this.physics.add.sprite(180, 550, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(180, 550, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(180, 550, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(180, 550, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(180, 550, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(180, 550, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(180, 550, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(180, 550, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(180, 550, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(180, 550, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[12] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(180, 550, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 13
        if(this.pack[13] != null){
            if (this.pack[13] == "key" && this.key == null){
                this.key = this.physics.add.sprite(420, 550, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(420, 550, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(420, 550, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(420, 550, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(420, 550, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(420, 550, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(420, 550, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(420, 550, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(420, 550, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(420, 550, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[13] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(420, 550, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 14
        if(this.pack[14] != null && this.key == null){
            if (this.pack[14] == "key"){
                this.key = this.physics.add.sprite(660, 550, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(660, 550, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(660, 550, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(660, 550, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(660, 550, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(660, 550, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(660, 550, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(660, 550, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(660, 550, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(660, 550, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[14] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(660, 550, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 15
        if(this.pack[15] != null){
            if (this.pack[15] == "key" && this.key == null){
                this.key = this.physics.add.sprite(900, 550, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(900, 550, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(900, 550, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(900, 550, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(900, 550, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(900, 550, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(900, 550, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(900, 550, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(900, 550, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(900, 550, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[15] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(900, 550, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 16
        if(this.pack[16] != null){
            if (this.pack[16] == "key" && this.key == null){
                this.key = this.physics.add.sprite(1140, 550, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(1140, 550, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(1140, 550, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(1140, 550, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(1140, 550, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(1140, 550, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(1140, 550, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(1140, 550, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(1140, 550, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(1140, 550, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[16] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(1140, 550, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // slot 17
        if(this.pack[17] != null){
            if (this.pack[17] == "key" && this.key == null){
                this.key = this.physics.add.sprite(1380, 550, 'key').setInteractive();
                this.key.body.immovable = true;
                this.key.body.allowGravity = false;
                this.key.setScale(4);
                this.key.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "needleOne" && this.needleOne == null){
                this.needleOne = this.physics.add.sprite(1380, 550, 'needle').setInteractive();
                this.needleOne.body.immovable = true;
                this.needleOne.body.allowGravity = false;
                this.needleOne.setScale(4);
                this.needleOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "needleTwo" && this.needleTwo == null){
                this.needleTwo = this.physics.add.sprite(1380, 550, 'needle').setInteractive();
                this.needleTwo.body.immovable = true;
                this.needleTwo.body.allowGravity = false;
                this.needleTwo.setScale(4);
                this.needleTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "spool" && this.spool == null){
                this.spool = this.physics.add.sprite(1380, 550, 'spool').setInteractive();
                this.spool.body.immovable = true;
                this.spool.body.allowGravity = false;
                this.spool.setScale(4);
                this.spool.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "rope" && this.rope == null){
                this.rope = this.physics.add.sprite(1380, 550, 'ropeCoil').setInteractive();
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
                this.rope.setScale(4);
                this.rope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "cards" && this.cards == null){
                this.cards = this.physics.add.sprite(1380, 550, 'cardDeck').setInteractive();
                this.cards.body.immovable = true;
                this.cards.body.allowGravity = false;
                this.cards.setScale(4);
                this.cards.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "batteryOne" && this.batteryOne == null){
                this.batteryOne = this.physics.add.sprite(1380, 550, 'battery').setInteractive();
                this.batteryOne.body.immovable = true;
                this.batteryOne.body.allowGravity = false;
                this.batteryOne.setScale(4);
                this.batteryOne.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "batteryTwo" && this.batteryTwo == null){
                this.batteryTwo = this.physics.add.sprite(1380, 550, 'battery').setInteractive();
                this.batteryTwo.body.immovable = true;
                this.batteryTwo.body.allowGravity = false;
                this.batteryTwo.setScale(4);
                this.batteryTwo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "shot" && this.shot == null){
                this.shot = this.physics.add.sprite(1380, 550, 'shot').setInteractive();
                this.shot.body.immovable = true;
                this.shot.body.allowGravity = false;
                this.shot.setScale(4);
                this.shot.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "medBag" && this.medBag == null){
                this.medBag = this.physics.add.sprite(1380, 550, 'medBag').setInteractive();
                this.medBag.body.immovable = true;
                this.medBag.body.allowGravity = false;
                this.medBag.setScale(4);
                this.medBag.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
            else if (this.pack[17] == "stephascope" && this.stephascope == null){
                this.stephascope = this.physics.add.sprite(1380, 550, 'stephascope').setInteractive();
                this.stephascope.body.immovable = true;
                this.stephascope.body.allowGravity = false;
                this.stephascope.setScale(4);
                this.stephascope.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }
    
        // get rid off
        if(tutorial == "complete" && this.key != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "key"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
                this.key.destroy();
        }
    
        if(sewQuest == "complete" && this.needleOne != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "needleOne"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.needleOne.destroy();
        }

        if(sewQuest == "complete" && this.needleTwo != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "needleTwo"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.needleTwo.destroy();
        }

        if(sewQuest == "complete" && this.spool != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "spool"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.spool.destroy();
        }

        if(ropeLadder == true && this.rope != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "rope"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.rope.destroy();
        }

        if(warQuest == "complete" && this.cards != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "cards"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.cards.destroy();
        }

        if(tvQuest == "complete" && this.batteryOne != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "batteryOne"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.batteryOne.destroy();
        }

        if(tvQuest == "complete" && this.batteryTwo != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "batteryTwo"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.batteryTwo.destroy();
        }

        if(doctorQuest == "complete" && this.shot != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "shot"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.shot.destroy();
        }

        if(doctorQuest == "complete" && this.medBag != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "medBag"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.medBag.destroy();
        }

        if(doctorQuest == "complete" && this.stephascope != null){
            this.spot = 0;
            while (this.spot < 18){
                if (this.pack[this.spot] == "stephascope"){
                    this.pack[this.spot] = null;
                    break;
                }
                else {
                    this.spot += 1;
                }
            }
            this.stephascope.destroy();
        }
        
        // count check
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log('talking is ' + this.talking);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyT)){
            this.talking = !this.talking;
            
        }

        if (this.talking == true){
            if (this.physics.overlap(this.cursor, this.key)) {
                this.line1.setText('Peef: Its the key to the bedroom door.');
                this.line2.setText('Bandit hid it under the bad for some reason. Probably just playing.');
            }
            if (this.physics.overlap(this.cursor, this.needleOne)) {
                this.line1.setText('Peef: Its a sewing needle. We often go through at least two of these fixing just one of us.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.needleTwo)) {
                this.line1.setText('Peef: Its a sewing needle. We often go through at least two of these fixing just one of us.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.spool)) {
                this.line1.setText('Peef: Its a spool of thread. There is not much left due to Stiches many rips. Gotta get more soon.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.rope)) {
                this.line1.setText('Peef: Its a coil of rope. Its just strong enough to hold up a tiny climber like me.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.cards)) {
                this.line1.setText('Peef: Its a deck of cards. Plenty of games to be had and make up with these.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.batteryOne)) {
                this.line1.setText('Peef: Its a battery. It can power electronics.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.batteryTwo)) {
                this.line1.setText('Peef: Its a battery. It can power electronics.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.shot)) {
                this.line1.setText('Peef: Its a toy shot. It has a plastic ball on the end instead of a needle.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.medBag)) {
                this.line1.setText('Peef : Its a toy doctors bag. Its full of sealed bottles of plastic pills.');
                this.line2.setText('');
            }
            if (this.physics.overlap(this.cursor, this.stephascope)) {
                this.line1.setText('Peef: Its a toy stephascope. Its mostly plastic, but the part that goes on chests is metal.');
                this.line2.setText('');
            }
            
        }

        if (this.talking == false){
            if (tutorial == "complete"){
                this.line1.setText('');
                this.line2.setText('');
            }
            else if (tutorial != "complete"){
                this.line1.setText('This is the inventory, where you can see the stuff Peef has gathered.');
                this.line2.setText('Use WASD to move between items. Press T over an item to hear what peef thinks of it.');
            }
         }

    }  

    has(item){
        this.space = 0;
        this.result = false
        while (this.space < inventory.length){
            if (inventory[this.space] == item){
                this.result = true;
                break;
            }
            else {
                this.space += 1;
            }
        }
        return this.result;
    }


}