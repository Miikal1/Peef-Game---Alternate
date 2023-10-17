class DiningRoomDay2 extends Phaser.Scene {
    constructor() {
        super('diningRoomDay2');
    }

    preload(){

        this.load.image('diningRoom', "assets/diningRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('chairSeatSide', "assets/chairSeatSide.png");
        this.load.image('tableSurface', "assets/tableSurface.png");
        this.load.image('needle', "assets/needle.png");
        this.load.image('ropeCoil', "assets/ropeCoil.png");
        this.load.image('stool', "assets/stool.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60});
        this.load.image('clearDoor', "assets/clearDoor.png");

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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'diningRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.farLeftChair = this.physics.add.sprite(140, 488, 'chairSeatSide');
        this.farLeftChair.body.immovable = true;
        this.farLeftChair.body.allowGravity = false;
        this.platforms.add(this.farLeftChair);

        this.farRightChair = this.physics.add.sprite(1480, 488, 'chairSeatSide');
        this.farRightChair.body.immovable = true;
        this.farRightChair.body.allowGravity = false;
        this.platforms.add(this.farRightChair);

        this.tableTop = this.physics.add.sprite(816, 322, 'tableSurface');
        this.tableTop.body.immovable = true;
        this.tableTop.body.allowGravity = false;
        this.platforms.add(this.tableTop);

        this.needleOne = this.physics.add.sprite(300, 270, 'needle');

        this.rope = this.physics.add.sprite(130, 430, 'ropeCoil');

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;
        
        this.p1 = this.physics.add.sprite(55, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);

        this.stool = this.physics.add.sprite(1350, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.p1, this.stool);
        this.physics.add.collider(this.needleOne, this.platforms);
        this.physics.add.collider(this.rope, this.platforms);

        this.line1 = this.add.text(880, 790, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
        this.line2 = this.add.text(880, 840, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);

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

        if(this.keyA.isDown) {
            this.p1.setVelocityX(-270);
            this.p1.setFlip(true, false);
            this.p1.anims.play('walk', true);
        }
        else if(this.keyD.isDown) {
            this.p1.setVelocityX(270);
            this.p1.resetFlip();
            this.p1.anims.play('walk', true);
        }
        else {
            this.p1.setVelocityX(0);
            this.p1.anims.play('idle', true);
        }  

        if(this.checkCollision(this.p1, this.farLeftChair) && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-650);
            console.log(this.p1.velocityY);
            console.log("1");
        }
        
        if(this.checkCollision(this.p1, this.farRightChair) && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-650);
            console.log(this.p1.velocityY);
            console.log("2");
        }

        if(this.checkCollision(this.p1, this.stool) && this.p1.y <= this.stool.y && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-800);
        }

        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-500);
            console.log(this.p1.velocityY);
            console.log("4");
        }

        if (this.physics.overlap(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('stairRoomDay2');
        }

        if (this.physics.overlap(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('livingRoomDay2');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.scene.switch('inventoryDay2');
        }

        if (this.physics.overlap(this.p1, this.needleOne) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("needleOne");
            this.needleOne.destroy();
        }

        if (this.physics.overlap(this.p1, this.rope) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("rope");
            this.rope.destroy();
        }

        if (this.physics.overlap(this.p1, this.needleOne) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.rope)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.talking == true){
            if (this.physics.overlap(this.p1, this.needleOne)) {
                this.line1.setText('Peef: Its a sewing needle. We often go through at least two of these fixing just one of us.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.rope)) {
                this.line1.setText('Peef: Its a coil of rope. Its just strong enough to hold up a tiny climber like me.');
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