class PlayRoomDay1 extends Phaser.Scene {
    constructor() {
        super('playRoomDay1');
    }

    preload(){

        this.load.image('playRoom', "assets/playRoom.png");
        this.load.image('playFloor', "assets/playFloor.png");
        this.load.image('shelfStory', "assets/shelfStory.png");
        this.load.image('stool', "assets/stool.png");
        this.load.image('medBag', "assets/medBag.png");
        this.load.image('playRoomShelf', "assets/playRoomShelf.png");
        this.load.image('playRoomBigChest', "assets/playRoomBigChest.png");
        this.load.image('playRoomMiniChest', "assets/playRoomMiniChest.png");
        this.load.image('playRoomBoardGame', "assets/playRoomBoardGame.png");
        this.load.image('playRoomThinBook', "assets/playRoomThinBook.png");
        this.load.image('playRoomThickBook', "assets/playRoomThickBook.png");
        this.load.image('playRoomLegoCar', "assets/playRoomLegoCar.png");
        this.load.image('playRoomLegoCastle', "assets/playRoomLegoCastle.png");
        this.load.image('windowSillSide', "assets/windowSillSide.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('comander', "assets/comander.png");
        this.load.image('peefJR', "assets/peefJR.png");
        this.load.image('clearDoor', "assets/clearDoor.png");
        this.load.image('testItem', "assets/testItem.png");

    }    

    create(){

        let width = config.width;
        let height = config.height;
        this.physics.world.gravity.y = 1000;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'playRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'playFloor');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.topShelf = this.physics.add.sprite(1320, 273, 'shelfStory');
        this.topShelf.body.immovable = true;
        this.topShelf.body.allowGravity = false;
        this.platforms.add(this.topShelf);

        this.midShelf = this.physics.add.sprite(1320, 417, 'shelfStory');
        this.midShelf.body.immovable = true;
        this.midShelf.body.allowGravity = false;
        this.platforms.add(this.midShelf);

        this.botShelf = this.physics.add.sprite(1320, 573, 'shelfStory');
        this.botShelf.body.immovable = true;
        this.botShelf.body.allowGravity = false;
        this.platforms.add(this.botShelf);

        this.highShelf = this.physics.add.sprite(337, 182, 'playRoomShelf');
        this.highShelf.body.immovable = true;
        this.highShelf.body.allowGravity = false;
        this.platforms.add(this.highShelf);

        this.windowSill = this.physics.add.sprite(1565, 411, 'windowSillSide');
        this.windowSill.body.immovable = true;
        this.windowSill.body.allowGravity = false;
        this.platforms.add(this.windowSill);

        this.bigChest = this.physics.add.sprite(307, 721, 'playRoomBigChest');
        this.bigChest.body.immovable = true;
        this.bigChest.body.allowGravity = false;

        this.miniChest = this.physics.add.sprite(1405, 680, 'playRoomMiniChest');
        this.miniChest.body.immovable = true;
        this.miniChest.body.allowGravity = false;

        this.boardGame = this.physics.add.sprite(1281, 545, 'playRoomBoardGame');
        this.boardGame.body.immovable = true;
        this.boardGame.body.allowGravity = false;

        this.purpleBook = this.physics.add.sprite(1419, 374, 'playRoomThinBook');
        this.purpleBook.body.immovable = true;
        this.purpleBook.body.allowGravity = false;

        this.redBook = this.physics.add.sprite(1380, 374, 'playRoomThinBook');
        this.redBook.body.immovable = true;
        this.redBook.body.allowGravity = false;

        this.greenBook = this.physics.add.sprite(1345, 374, 'playRoomThinBook');
        this.greenBook.body.immovable = true;
        this.greenBook.body.allowGravity = false;

        this.dictionary = this.physics.add.sprite(1249, 382, 'playRoomThickBook');
        this.dictionary.body.immovable = true;
        this.dictionary.body.allowGravity = false;

        this.legoCar = this.physics.add.sprite(1399, 233, 'playRoomLegoCar');
        this.legoCar.body.immovable = true;
        this.legoCar.body.allowGravity = false;

        this.legoCastle = this.physics.add.sprite(1255, 233, 'playRoomLegoCastle');
        this.legoCastle.body.immovable = true;
        this.legoCastle.body.allowGravity = false;

        this.stool = this.physics.add.sprite(1100, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.medBag = this.physics.add.sprite(1420, 553, 'medBag');

        //this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        //this.doorRight.body.immovable = true;
        //this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.comander = this.physics.add.sprite(830, 702, 'comander');
        this.comander.body.immovable = true;
        this.comander.body.allowGravity = false;

        this.peefJR = this.physics.add.sprite(930, 733, 'peefJR');
        this.peefJR.setFlip(true, false);
        this.peefJR.body.immovable = true;
        this.peefJR.body.allowGravity = false;

        this. talkCount = 0;
        this.finished = false;

        this.p1 = this.physics.add.sprite(55, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);
        this.p1.setFlip(true, false);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.p1, this.stool);
        this.physics.add.collider(this.medBag, this.platforms);

        this.line1 = this.add.text(880, 790, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
        this.line2 = this.add.text(880, 840, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);

        this.talking = false;

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('PeefSide', { start: 0, end: 7, first: 0}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [{key: 'PeefSide', frame: 0}],
        });

        gloabalGameState.currentScene = this.scene.key;

    }

    update(){

        if(this.keyA.isDown && this.talking == false) {
            this.p1.setVelocityX(-270);
            this.p1.setFlip(true, false);
            this.p1.anims.play('walk', true);
        }
        else if(this.keyD.isDown && this.talking == false) {
            this.p1.setVelocityX(270);
            this.p1.resetFlip();
            this.p1.anims.play('walk', true);
        }
        else {
            this.p1.setVelocityX(0);
            this.p1.anims.play('idle', true);
        }

        if(this.checkCollision(this.p1, this.stool) && this.p1.y <= this.stool.y && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-800);
        }

        if(this.checkCollision(this.p1, this.windowSill) && this.p1.y <= this.windowSill.y && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-600);
        }
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW) && this.talking == false) {
            this.p1.body.setVelocityY(-500);
        }

        if (this.physics.overlap(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('upStairRoomDay1');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.scene.switch('inventoryDay1');
        }

        if (this.physics.overlap(this.p1, this.medBag) && Phaser.Input.Keyboard.JustDown(this.keyR) && this.talking == false){
            inventory.push("medBag");
            this.medBag.destroy();
        }

        if (this.talkCount == 2){
            warQuest = "active";
        }

        if (this.has("cards") && warQuest == "active"){
            warQuest = "found";
        }

        if (this.talking == false && this.finished == true){
            warQuest = "complete";
        }   
        
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log(this.talking);
            
        }   

        //if (this.checkCollision(this.p1, this.doorRight)){
        //    this.p1.x = 1535;
        //    this.scene.switch('livingRoom');
        //}

        /*if (this.checkCollision(this.p1, this.ropeSpot) && Phaser.Input.Keyboard.JustDown(this.keyT)){
            if (this.has("rope")){
                this.takeOut("rope");
                this.ropeSpot.destroy();
                this.rope = this.physics.add.sprite(628, 420, 'ropeClimb');
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
            }
            
        }*/

           
        
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log(this.talking);
            
        }   

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("spool"));
        //}

        if (this.physics.overlap(this.p1, this.comander) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talkCount = this.talkCount + 1;
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.peefJR)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talkCount = this.talkCount + 1;
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.bigChest)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.miniChest)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }
        if ((this.physics.overlap(this.p1, this.boardGame)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.dictionary)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.greenBook)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.redBook)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.purpleBook)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.legoCar)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.legoCastle)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.medBag)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.talking == true){
            if (this.physics.overlap(this.p1, this.comander)) {
                if (warQuest == "inactive") {
                    this.line1.setText('Comander: At ease, General. I am going to teach JR here how to play War. Can you help find the supplies?');
                    this.line2.setText('Peef: Uh, sure . . . We do not have weapons in this house, right?');
                }
                else if (warQuest == "active") {
                    this.line1.setText('Comander: Have you found the war supplies yet, general?');
                    this.line2.setText('Peef: I am still looking for them. Also, you do not have to call me general.');
                }
                else if (warQuest == "found"){
                    this.line1.setText('Comander: Thank you, General. Now then, soldier, you start the game with . . .');
                    this.line2.setText('Peef: Thank goodness, you just ment the card game. Remember to have fun, Comander.');
                    this.finished = true;
                }
                else if (warQuest == "complete"){
                    this.line1.setText('Comander: Greetings, General. JR is doing great in this game. You teach him well.');
                    this.line2.setText('Peef: You know, just because I am the house leader does not mean you have to call me general.');
                }
            }

            if (this.physics.overlap(this.p1, this.peefJR)) {
                if (warQuest == "inactive") {
                    this.line1.setText('Peef JR: Hey Peef. Comander says he is going to teach me to play war. Thats a harmless game, right?');
                    this.line2.setText('Peef: Do not worry, I am pretty sure he does not want to hurt you. He probably wants me to get him supplies.');
                }
                else if (warQuest == "active") {
                    this.line1.setText('Peef JR: I am kinda nervous Peef. I have heard lots of bad things about war.');
                    this.line2.setText('Peef: I doubt Comander really means war. I just gotta figure out what he needs.');
                }
                else if (warQuest == "found"){
                    this.line1.setText('Peef Jr: So war is just a card game. whew! I was getting worried, *hugs Peef* ');
                    this.line2.setText('Peef: There there, JR. Its all okay. Now go have fun!');
                    this.finished = true;
                }
                else if (warQuest == "complete"){
                    this.line1.setText('Peef JR: This is actually kinda fun. But for some reason, Comander keeps calling me soldier.');
                    this.line2.setText('Peef: Comander calls everyone that, execpt for me. He calls me general.');
                }
            }

            if (this.physics.overlap(this.p1, this.bigChest)) {
                this.line1.setText('Peef : Its a huge toy chest. Mostly some RC cars and action figures, none of which are alive like us.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.miniChest)) {
                this.line1.setText('Peef : Its a small toy chest. Its full of used lego set instructions.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.boardGame)) {
                this.line1.setText('Peef : Its a stack of boardgames. Theres Shoots & Ladders, Candyland, and some unknown game in a metal box.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.dictionary)) {
                this.line1.setText('Peef : Its a bunch of dictionaries. Only Smarty actually reads these for fun.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.greenBook)) {
                this.line1.setText('Peef : This green book is my favorite. It tells of how I was made by Santa Claus.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.redBook)) {
                this.line1.setText('Peef : Its a red picture book. It tells a story about lost bunny rabbits.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.purpleBook)) {
                this.line1.setText('Peef : Its a purple story book. It has three different fairy tails.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.legoCar)) {
                this.line1.setText('Peef : Its a lego set of a car.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.legoCastle)) {
                this.line1.setText('Peef : Its a lego set of a castle.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.medBag)) {
                this.line1.setText('Peef : Its a toy doctors bag. Its full of sealed bottles of plastic pills.');
                this.line2.setText('');
            }

            if (this.keyA.isDown || this.keyD.isDown) {
                this.p1.setVelocityX(0);
            }
            if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
                this.p1.body.setVelocityY(0);
            }

            
        }

        if (this.talking == false){
            this.line1.setText('');
            this.line2.setText('');
         }

    }

    checkCollision(a, b) {
        // simple AABB checking
        if ((a.x < b.x + b.width && 
            a.x + a.width > b.x && 
            a.y < b.y + b.height &&
            a.height + a.y > b.y) ) {
                return true;
        } 
        else {
            return false;
        }
    }

    collect(item) {
        this.space = 0;
        while (this.space < 18){
            if (inventory[this.space] == null){
                inventory[this.space] == item;
                break;
            }
            else {
                this.space += 1;
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

    takeOut(item){
        this.space = 0;
        while (this.space < 10){
            if (inventory[this.space] == item){
                inventory[this.space] == null;
                break;
            }
            else {
                this.space += 1;
            }
        }
    }

}