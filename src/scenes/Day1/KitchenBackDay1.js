class KitchenBackDay1 extends Phaser.Scene {
    constructor() {
        super('kitchenBackDay1');
    }

    preload(){

        this.load.image('kitchenBack', "assets/kitchenBack.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('kitchenCounterTop', "assets/kitchenCounterTop.png");
        this.load.image('kitchenDrawer', "assets/kitchenDrawer.png");
        this.load.image('kitchenToaster', "assets/kitchenToaster.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('stool', "assets/stool.png");
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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'kitchenBack').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.counter = this.physics.add.sprite(669, 457, 'kitchenCounterTop');
        this.counter.body.immovable = true;
        this.counter.body.allowGravity = false;
        this.counter.setFlip(true, false);
        this.platforms.add(this.counter);

        this.drawerRight = this.physics.add.sprite(1034, 745, 'kitchenDrawer');
        this.drawerRight.body.immovable = true;
        this.drawerRight.body.allowGravity = false;

        this.drawerMidRight = this.physics.add.sprite(790, 745, 'kitchenDrawer');
        this.drawerMidRight.body.immovable = true;
        this.drawerMidRight.body.allowGravity = false;

        this.drawerMidLeft = this.physics.add.sprite(543, 745, 'kitchenDrawer');
        this.drawerMidLeft.body.immovable = true;
        this.drawerMidLeft.body.allowGravity = false;

        this.drawerLeft = this.physics.add.sprite(305, 745, 'kitchenDrawer');
        this.drawerLeft.body.immovable = true;
        this.drawerLeft.body.allowGravity = false;

        this.stool = this.physics.add.sprite(140, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;

        //this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        //this.doorRight.body.immovable = true;
        //this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.p1 = this.physics.add.sprite(1535, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.p1, this.stool);

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
            this.p1.body.setVelocityY(-500);
        }

        //if (this.checkCollision(this.p1, this.doorLeft)){
        //    this.p1.x = 55;
        //    this.scene.switch('livingRoom');
        //}

        if (this.physics.overlap(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('kitchenDay1');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.scene.switch('inventoryDay1');
        }

        /*if (this.physics.overlap(this.p1, this.stephascope) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("stephascope");
            this.stephascope.destroy();
        }*/
        
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log(this.talking);
            
        }   

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("spool"));
        //}

        if ((this.physics.overlap(this.p1, this.magnaLegs)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.fridge)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.drawerLeft)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.drawerMidLeft)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.drawerMidRight)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.drawerRight)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.oven)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.toaster)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.stephascope)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }


        if (this.talking == true){
            if (this.physics.overlap(this.p1, this.drawerRight)) {
                this.line1.setText('Peef: This drawer has some baking sheets in it. If someone dares to use the oven, they could use them to make cookies.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.drawerMidLeft)) {
                this.line1.setText('Peef: This drawer is full of cleaning stuff. Dish soup, stain remover, and stain remover instructions. We ');
                this.line2.setText('Peef: We have to be extra careful not to destroy ourselves.');
            }

            if (this.physics.overlap(this.p1, this.drawerMidRight)) {
                this.line1.setText('Peef: This drawer has a bunch of pipes in it. I believe they make the sink work.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.drawerLeft)) {
                this.line1.setText('Peef: This drawer contains a trash can. We keep here to block the smell.');
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