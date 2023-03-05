class LivingRoom extends Phaser.Scene {
    constructor() {
        super('livingRoom');
    }

    preload(){

        this.load.image('livingRoom', "assets/livingRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('shelfStory', "assets/shelfStory.png");
        this.load.image('couchCushion', "assets/couchCushion.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('stiches', "assets/stiches.png");
        this.load.image('goodLamb', "assets/goodLamb.png");
        this.load.image('spool', "assets/spool.png");
        this.load.image('ropeClimb', "assets/ropeClimb.png");
        this.load.image('interactionPoint', "assets/interactionPoint.png");
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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'livingRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.leftCushion = this.physics.add.sprite(1010, 506, 'couchCushion');
        this.leftCushion.body.immovable = true;
        this.leftCushion.body.allowGravity = false;
        this.platforms.add(this.leftCushion);

        this.rightCushion = this.physics.add.sprite(1333, 506, 'couchCushion');
        this.rightCushion.body.immovable = true;
        this.rightCushion.body.allowGravity = false;
        this.platforms.add(this.rightCushion);

        this.topShelf = this.physics.add.sprite(464, 273, 'shelfStory');
        this.topShelf.body.immovable = true;
        this.topShelf.body.allowGravity = false;
        this.platforms.add(this.topShelf);

        this.midShelf = this.physics.add.sprite(464, 417, 'shelfStory');
        this.midShelf.body.immovable = true;
        this.midShelf.body.allowGravity = false;
        this.platforms.add(this.midShelf);

        this.botShelf = this.physics.add.sprite(464, 573, 'shelfStory');
        this.botShelf.body.immovable = true;
        this.botShelf.body.allowGravity = false;
        this.platforms.add(this.botShelf);

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;

        this.ropeSpot = this.physics.add.sprite(630, 735, 'interactionPoint');
        this.ropeSpot.body.immovable = true;
        this.ropeSpot.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');

        this.spool = this.physics.add.sprite(400, 250, 'spool');
        
        this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        this.goodLamb.setFlip(true, false);

        this.p1 = this.physics.add.sprite(500, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.stiches, this.ground);
        this.physics.add.collider(this.goodLamb, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.spool, this.platforms);

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

        //this.registry.events.on('changeData', this.updateData, this);

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

        if (this.checkCollision(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('diningRoom');
        }

        if (this.checkCollision(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('tvRoom');
        }

        if (this.checkCollision(this.p1, this.ropeSpot) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            if (this.has("rope")){
                this.takeOut("rope");
                this.ropeSpot.destroy();
                this.rope = this.physics.add.sprite(628, 420, 'ropeClimb');
                this.rope.body.immovable = true;
                this.rope.body.allowGravity = false;
            }
            
        }

        if (this.rope && this.checkCollision(this.p1, this.rope) && this.keyR.isDown){
            this.p1.body.allowGravity = false;
            this.p1.body.setVelocityY(-500);
        }
        else if (this.rope && !this.checkCollision(this.p1, this.rope) || !(this.keyR.isDown)){
            this.p1.body.allowGravity = true;
        }

        if (this.rope && this.checkCollision(this.p1, this.rope)){
            console.log(true);
        }

        if (this.checkCollision(this.p1, this.spool) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("spool");
            this.spool.destroy();
        }   
        
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log(this.talking);
            
        }   

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("spool"));
        //}

        if ((this.checkCollision(this.p1, this.goodLamb) || this.checkCollision(this.p1, this.stiches)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (this.talking == true){
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