class ClosetDay2 extends Phaser.Scene {
    constructor() {
        super('closetDay2');
    }

    preload(){

        this.load.image('closet', "assets/closet.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('closetDrawerTop', "assets/closetDrawerTop.png");
        this.load.image('closetDrawer', "assets/closetDrawer.png");
        this.load.image('closetPlatform', "assets/closetPlatform.png");
        this.load.image('couchCushion', "assets/couchCushion.png");
        this.load.image('stool', "assets/stool.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('snowWing', "assets/snowWing.png");
        this.load.image('battery', "assets/battery.png");
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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'closet').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.dresserTop = this.physics.add.sprite(813, 434, 'closetDrawerTop');
        this.dresserTop.body.immovable = true;
        this.dresserTop.body.allowGravity = false;
        this.platforms.add(this.dresserTop);

        this.lowShelf = this.physics.add.sprite(1468, 632, 'closetPlatform');
        this.lowShelf.body.immovable = true;
        this.lowShelf.body.allowGravity = false;
        this.platforms.add(this.lowShelf);

        this.midShelf = this.physics.add.sprite(1536, 528, 'closetPlatform');
        this.midShelf.body.immovable = true;
        this.midShelf.body.allowGravity = false;
        this.platforms.add(this.midShelf);

        this.topShelf = this.physics.add.sprite(1604, 417, 'closetPlatform');
        this.topShelf.body.immovable = true;
        this.topShelf.body.allowGravity = false;
        this.platforms.add(this.topShelf);

        this.dresser = this.physics.add.sprite(813, 704, 'closetDrawer');
        this.dresser.body.immovable = true;
        this.dresser.body.allowGravity = false;

        this.stool = this.physics.add.sprite(470, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.doorSide = this.physics.add.sprite(218, 735, 'sideDoor');
        this.doorSide.body.immovable = true;
        this.doorSide.body.allowGravity = false;

        this.battery = this.physics.add.sprite(1570, 395, 'battery');

        //this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        //this.doorRight.body.immovable = true;
        //this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.snowWing = this.physics.add.sprite(700, 393, 'snowWing');
        this.snowWing.body.immovable = true;
        this.snowWing.body.allowGravity = false;

        this.p1 = this.physics.add.sprite(55, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);
        this.p1.setFlip(true, false);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.stool);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.battery, this.platforms);

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
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW) && this.talking == false) {
            this.p1.body.setVelocityY(-560);
        }

        if (this.physics.overlap(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('bedRoomDay2');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.scene.switch('inventoryDay2');
        }

        if (this.physics.overlap(this.p1, this.battery) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("batteryOne");
            this.battery.destroy();
        }

        //if (this.checkCollision(this.p1, this.doorSide) && Phaser.Input.Keyboard.JustDown(this.keyR)){
           
            
        //}

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

        if ((this.physics.overlap(this.p1, this.snowWing)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.dresser)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.doorSide)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }
        if ((this.physics.overlap(this.p1, this.battery)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.talking == true){
            if (this.physics.overlap(this.p1, this.snowWing)) {
                this.line1.setText('Peef: Hey Snow-wing. Its cool enough for you in here, right?');
                this.line2.setText('Snow-Wing: Oh, hey Peef. Yeah, its plenty cool in here. I think I may build a nest in this room.');
            }

            if (this.physics.overlap(this.p1, this.dresser)) {
                this.line1.setText('Peef: Its a dresser. Its full of clothes that are too big for any of us.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.doorSide)) {
                this.line1.setText('Peef: This door just leads to a smaller closet. Not sure why it needs a door.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.battery)) {
                this.line1.setText('Peef: Its a battery. It can power electronics.');
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