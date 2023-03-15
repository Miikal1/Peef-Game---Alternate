class LaundryRoom extends Phaser.Scene {
    constructor() {
        super('laundryRoom');
    }

    preload(){

        this.load.image('laundryRoom', "assets/laundryRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('windowSillSide', "assets/windowSillSide.png");
        this.load.image('laundryMachineTop', "assets/laundryMachineTop.png");
        this.load.image('laundryMachine', "assets/laundryMachine.png");
        this.load.image('laundryBucket', "assets/laundryBucket.png");
        this.load.image('laundryPlatform', "assets/laundryPlatform.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('spikey', "assets/spikey.png");
        this.load.image('stool', "assets/stool.png");
        this.load.image('shot', "assets/shot.png");
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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'laundryRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.windowSill = this.physics.add.sprite(1565, 411, 'windowSillSide');
        this.windowSill.body.immovable = true;
        this.windowSill.body.allowGravity = false;
        this.platforms.add(this.windowSill);

        this.machineLeft = this.physics.add.sprite(364, 465, 'laundryMachineTop');
        this.machineLeft.body.immovable = true;
        this.machineLeft.body.allowGravity = false;
        this.platforms.add(this.machineLeft);

        this.machineRight = this.physics.add.sprite(705, 465, 'laundryMachineTop');
        this.machineRight.body.immovable = true;
        this.machineRight.body.allowGravity = false;
        this.platforms.add(this.machineRight);

        this.platform = this.physics.add.sprite(1345, 480, 'laundryPlatform');
        this.platform.body.immovable = true;
        this.platform.body.allowGravity = false;
        this.platforms.add(this.platform);

        this.stool = this.physics.add.sprite(1200, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.shot = this.physics.add.sprite(1570, 380, 'shot');

        this.washer = this.physics.add.sprite(364, 732, 'laundryMachine');
        this.washer.body.immovable = true;
        this.washer.body.allowGravity = false;

        this.dryer = this.physics.add.sprite(705, 732, 'laundryMachine');
        this.dryer.body.immovable = true;
        this.dryer.body.allowGravity = false;

        this.bucket = this.physics.add.sprite(998, 730, 'laundryBucket');
        this.bucket.body.immovable = true;
        this.bucket.body.allowGravity = false;

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        //this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        //this.doorRight.body.immovable = true;
        //this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.spikey = this.physics.add.sprite(630, 748, 'spikey');
        this.spikey.body.immovable = true;
        this.spikey.body.allowGravity = false;

        this.p1 = this.physics.add.sprite(55, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);
        this.p1.setFlip(true, false);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.p1, this.stool);
        this.physics.add.collider(this.shot, this.platforms);

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
            console.log(this.p1.velocityY);
            console.log("3");
        }
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW) && this.talking == false) {
            this.p1.body.setVelocityY(-500);
        }

        if (this.checkCollision(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('hallWay');
        }

        if (this.checkCollision(this.p1, this.shot) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("shot");
            this.shot.destroy();
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

        if (this.checkCollision(this.p1, this.spikey) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.checkCollision(this.p1, this.shot) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.checkCollision(this.p1, this.washer) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }
        if (this.checkCollision(this.p1, this.dryer) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.checkCollision(this.p1, this.bucket) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.talking == true){
            if (this.checkCollision(this.p1, this.spikey)) {
                this.line1.setText('Spikey: Hey Peef. I was wondering, did I leave any spikes in the bed this morning.');
                this.line2.setText('Peef: Hey Spikey. You did not leave any spikes or quills, or anything. You do not have to worry buddy.');
            }

            if (this.checkCollision(this.p1, this.shot)) {
                this.line1.setText('Peef: Its a toy shot. It has a plastic ball on the end instead of a needle.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.washer)) {
                this.line1.setText('Peef: Its the washing machine. Most of us are not machine washable, we do not use it.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.dryer)) {
                this.line1.setText('Peef: Its the dryer. Sadly, its not a safe thrill ride for most of us.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.bucket)) {
                this.line1.setText('Peef: Its the washing bucket. Its how most of use get clean, with lots of soap and very careful scrubbing techniques.');
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
        while (this.space < 10){
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