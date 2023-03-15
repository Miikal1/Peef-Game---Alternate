class BathRoom extends Phaser.Scene {
    constructor() {
        super('bathRoom');
    }

    preload(){

        this.load.image('bathroom', "assets/bathroom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('couchCushion', "assets/couchCushion.png");
        this.load.image('bathroomSink', "assets/bathroomSink.png");
        this.load.image('bathroomTub', "assets/bathroomTub.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('curie', "assets/curie.png");
        this.load.image('celly', "assets/celly.png");
        this.load.image('bloody', "assets/bloody.png");
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
        
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'bathroom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.sink = this.physics.add.sprite(376, 721, 'bathroomSink');
        this.sink.body.immovable = true;
        this.sink.body.allowGravity = false;

        this.tub = this.physics.add.sprite(1252, 750, 'bathroomTub');
        this.tub.body.immovable = true;
        this.tub.body.allowGravity = false;

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

        this.curie = this.physics.add.sprite(570, 741, 'curie');
        this.curie.body.immovable = true;
        this.curie.body.allowGravity = false;

        this.bloody = this.physics.add.sprite(500, 741, 'bloody');
        this.bloody.body.immovable = true;
        this.bloody.body.allowGravity = false;

        this.celly = this.physics.add.sprite(640, 741, 'celly');
        this.celly.body.immovable = true;
        this.celly.body.allowGravity = false;

        this.p1 = this.physics.add.sprite(55, 730, 'PeefSide');
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
            this.scene.switch('hallWay');
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

        if ((this.checkCollision(this.p1, this.curie) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.celly) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.bloody) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.sink) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.tub) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if (this.talking == true){
            if (this.checkCollision(this.p1, this.bloody)) {
                if (this.has("medBag") && this.has("shot") && this.has("stephascope")){
                    this.line1.setText('Bloody: Thanks for the help. We will be helping everyone in the house soon enough.');
                    this.line2.setText('Peef: Have fun living the dream, doctors.');
                }
                else if (!(this.has("medBag")) || !(this.has("shot")) || !(this.has("stephascope"))) {
                    this.line1.setText('Bloody: Hey Peef. Guess what? We are so close to reaching are dream of medicine practice. We just need a little more supplies.');
                    this.line2.setText('Peef: I have been happy to support your dream. And I am happy to help to.');
                }
            }
            if (this.checkCollision(this.p1, this.curie)) {
                if (this.has("medBag") && this.has("shot") && this.has("stephascope")){
                    this.line1.setText('Curie: You got everything?! Thank you Peef! Dreams are coming true!');
                    this.line2.setText('Peef: Nice to see you so happy. Good luck doctors.');
                }
                else if (!(this.has("medBag")) || !(this.has("shot")) || !(this.has("stephascope"))) {
                    this.line1.setText('Peef: Hey Curie. You and the cells still trying to become doctors?');
                    this.line2.setText('Curie: We sure are, Peef! We just need a few more supplies. We will be the best healers ever!');
                }
            }
            if (this.checkCollision(this.p1, this.celly)) {
                if (this.has("medBag") && this.has("shot") && this.has("stephascope")){
                    this.line1.setText('Celly: Thats everything we need. Now we can set up our office.');
                    this.line2.setText('Celly: Plushies of a red blood cell, white blood cell, and a bottle of Covid vaccine working as doctors. Sure to be a success.');
                }
                else if (!(this.has("medBag")) || !(this.has("shot")) || !(this.has("stephascope"))) {
                    this.line1.setText('Peef: Hey Celly. I here you guys are getting close to becoming doctors.');
                    this.line2.setText('Celly: Yeah. We just need a med bag, a seringe, and a stephascope. Then we can set up shop.');
                }
            }

            if (this.checkCollision(this.p1, this.sink)) {
                this.line1.setText('Peef: Its the sink. Even the biggest of us are too small reach it.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.tub)) {
                this.line1.setText('Peef: Its the bath tub. Though only stuffed animal sea creatures can stand getting wet, almost everyone has ideas for it.');
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