class UpStairRoomDay2 extends Phaser.Scene {
    constructor() {
        super('upStairRoomDay2');
    }

    preload(){

        this.load.image('upStairRoom', "assets/upStairRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('couchCushion', "assets/couchCushion.png");
        this.load.image('stairStep', "assets/stairStep.png");
        this.load.image('stairPillarThin', "assets/stairPillarThin.png");
        this.load.image('stairPillarThick', "assets/stairPillarThick.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('sniffy', "assets/sniffy.png");
        this.load.image('clearDoor', "assets/clearDoor.png");
        this.load.image('sideDoor', "assets/sideDoor.png");
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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'upStairRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(612, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.stairStepOne = this.physics.add.sprite(1540, 882, 'stairStep');
        this.stairStepOne.body.immovable = true;
        this.stairStepOne.body.allowGravity = false;
        this.platforms.add(this.stairStepOne);

        this.stairPillarOne = this.physics.add.sprite(1580, 925, 'stairPillarThick');
        this.stairPillarOne.body.immovable = true;
        this.stairPillarOne.body.allowGravity = false;
        this.platforms.add(this.stairPillarOne);

        this.stairStepTwo = this.physics.add.sprite(1460, 792, 'stairStep');
        this.stairStepTwo.body.immovable = true;
        this.stairStepTwo.body.allowGravity = false;
        this.platforms.add(this.stairStepTwo);

        this.stairPillarTwo = this.physics.add.sprite(1501, 838, 'stairPillarThick');
        this.stairPillarTwo.body.immovable = true;
        this.stairPillarTwo.body.allowGravity = false;
        this.platforms.add(this.stairPillarTwo);

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 850, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;

        this.doorSide = this.physics.add.sprite(314, 735, 'sideDoor');
        this.doorSide.body.immovable = true;
        this.doorSide.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.sniffy = this.physics.add.sprite(514, 743, 'sniffy');
        this.sniffy.body.immovable = true;
        this.sniffy.body.allowGravity = false;

        this.p1 = this.physics.add.sprite(55, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);


        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);

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
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW) && this.talking == false) {
            this.p1.body.setVelocityY(-500);
        }

        if (this.physics.overlap(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('hallWayDay2');
        }

        if (this.physics.overlap(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('stairRoomDay2');
        }

        if (this.physics.overlap(this.p1, this.doorSide) && Phaser.Input.Keyboard.JustDown(this.keyR)){  
            this.scene.switch('playRoomDay2');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.scene.switch('inventoryDay2');
        }

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
            console.log(this.p1.x + " " + this.p1.y);
            
        }   

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("spool"));
        //}

        if (this.physics.overlap(this.p1, this.sniffy) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.doorSide)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.talking == true){

            if (this.physics.overlap(this.p1, this.doorSide)) {
                this.line1.setText('Peef: This door leads to the play room, where we play with toys, games, the like.');
                this.line2.setText('Peef: Heh. Stuffed animals playing with toys. Who would have thought.');
            }
            
            if (this.physics.overlap(this.p1, this.sniffy)) {
                this.line1.setText('Peef: Hey there, Sniffy. Your nose found anything cool today.');
                this.line2.setText('Sniffy: Hi Peef. Well, some our friends smell pretty cool, but I hope to smell good perfume one day.');
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

        console.log(this.p1.x);
        console.log(this.p1.y);

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