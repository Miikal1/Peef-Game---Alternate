class UpStairRoom extends Phaser.Scene {
    constructor() {
        super('upStairRoom');
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
        this.load.image('testItem', "assets/testItem.png");

    }    

    create(){

        let width = config.width;
        let height = config.height;
        this.physics.world.gravity.y = 1000;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);

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

        this.p1 = this.physics.add.sprite(1535, 845, 'PeefSide');
        this.p1.setCollideWorldBounds(true);
        this.p1.setFlip(true, false);

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

    }

    update(){

        if(this.keyA.isDown && this.talking == false) {
            this.p1.setVelocityX(-200);
            this.p1.setFlip(true, false);
            this.p1.anims.play('walk', true);
        }
        else if(this.keyD.isDown && this.talking == false) {
            this.p1.setVelocityX(200);
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

        if (this.checkCollision(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('hallWay');
        }

        if (this.checkCollision(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('stairRoom');
        }

        if (this.checkCollision(this.p1, this.doorSide) && Phaser.Input.Keyboard.JustDown(this.keyT)){
           
            this.scene.switch('playRoom');
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
            console.log(this.talking);
            
        }   

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("spool"));
        //}

        //if ((this.checkCollision(this.p1, this.goodLamb) || this.checkCollision(this.p1, this.stiches)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
        //    this.talking = !this.talking;
        //}

        /*if (this.talking == true){
            if (this.checkCollision(this.p1, this.goodLamb) || this.checkCollision(this.p1, this.stiches)) {
                if (this.has("spool") && this.has("needleOne") && this.has("needleTwo")){
                    this.line1.setText('Good Lamb: Oh, thanks Peef! Now we can fix Stiches!');
                    this.line2.setText('Peef: Glad to help. I know how painful rips are.');
                }
                else if (!(this.has("spool")) || !(this.has("needleOne")) || !(this.has("needleTwo"))) {
                    this.line1.setText('Good Lamb: Help! Stiches ripped herself again! Can you get the sewing supplies?');
                    this.line2.setText('Peef: Oh gosh! Sit tight Stiches. Ill be back soon!');
                }
            }

            if (this.keyA.isDown || this.keyD.isDown) {
                this.p1.setVelocityX(0);
            }
            if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
                this.p1.body.setVelocityY(0);
            }

            
        }*/

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