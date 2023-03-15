class Kitchen extends Phaser.Scene {
    constructor() {
        super('kitchen');
    }

    preload(){

        this.load.image('kitchen', "assets/kitchen.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('kitchenCounterTop', "assets/kitchenCounterTop.png");
        this.load.image('kitchenDrawer', "assets/kitchenDrawer.png");
        this.load.image('kitchenToaster', "assets/kitchenToaster.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('magnaLegs', "assets/magnaLegs.png");
        this.load.image('stool', "assets/stool.png");
        this.load.image('stephascope', "assets/stephascope.png");
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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'kitchen').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.counter = this.physics.add.sprite(557, 457, 'kitchenCounterTop');
        this.counter.body.immovable = true;
        this.counter.body.allowGravity = false;
        this.platforms.add(this.counter);

        this.drawerRight = this.physics.add.sprite(920, 745, 'kitchenDrawer');
        this.drawerRight.body.immovable = true;
        this.drawerRight.body.allowGravity = false;

        this.drawerMid = this.physics.add.sprite(681, 745, 'kitchenDrawer');
        this.drawerMid.body.immovable = true;
        this.drawerMid.body.allowGravity = false;

        this.oven = this.physics.add.sprite(435, 745, 'kitchenDrawer');
        this.oven.body.immovable = true;
        this.oven.body.allowGravity = false;

        this.drawerLeft = this.physics.add.sprite(191, 745, 'kitchenDrawer');
        this.drawerLeft.body.immovable = true;
        this.drawerLeft.body.allowGravity = false;

        this.fridge = this.physics.add.sprite(1290, 745, 'kitchenDrawer');
        this.fridge.body.immovable = true;
        this.fridge.body.allowGravity = false;

        this.toaster = this.physics.add.sprite(818, 427, 'kitchenToaster');
        this.toaster.body.immovable = true;
        this.toaster.body.allowGravity = false;

        this.stool = this.physics.add.sprite(1080, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.stephascope = this.physics.add.sprite(157, 422, 'stephascope');

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

        this.magnaLegs = this.physics.add.sprite(1380, 680, 'magnaLegs');
        this.magnaLegs.body.immovable = true;
        this.magnaLegs.body.allowGravity = false;

        this.p1 = this.physics.add.sprite(1535, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.p1, this.stool);
        this.physics.add.collider(this.stephascope, this.platforms);

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
        }
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW) && this.talking == false) {
            this.p1.body.setVelocityY(-500);
        }

        //if (this.checkCollision(this.p1, this.doorLeft)){
        //    this.p1.x = 55;
        //    this.scene.switch('livingRoom');
        //}

        if (this.checkCollision(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('stairRoom');
        }

        if (this.checkCollision(this.p1, this.stephascope) && Phaser.Input.Keyboard.JustDown(this.keyR)){
            inventory.push("stephascope");
            this.stephascope.destroy();
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

        if ((this.checkCollision(this.p1, this.magnaLegs)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.fridge)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.drawerLeft)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.drawerMid)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.drawerRight)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.oven)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.toaster)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if ((this.checkCollision(this.p1, this.stephascope)) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }


        if (this.talking == true){
            if (this.checkCollision(this.p1, this.magnaLegs)) {
                this.line1.setText('Peef: Hows the fridge felling Magnalegs?');
                this.line2.setText('Magnalegs: Feeling alright Peef, though little dull sometimes. I wish we had more fridge magnets.');
            }

            if (this.checkCollision(this.p1, this.fridge)) {
                this.line1.setText('Peef: This is the fridge. Magnalegs the stuffed lion fridge magnet likes to hang here.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.drawerRight)) {
                this.line1.setText('Peef: This drawer is full of pots and mixing bolls. The smallest of us sometimes like to play in them.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.drawerMid)) {
                this.line1.setText('Peef: This drawer is full of plates. We broke a bunch of them when we first moved in.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.drawerLeft)) {
                this.line1.setText('Peef: This drawer has a big cake mixer in it. Only Jumbo can lift it.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.oven)) {
                this.line1.setText('Peef: Its the oven. As we are all highly flamble, we try to never use it.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.toaster)) {
                this.line1.setText('Peef: Its the toaster. Its less dangerous than the oven, so some of us do dare to use.');
                this.line2.setText('');
            }

            if (this.checkCollision(this.p1, this.stephascope)) {
                this.line1.setText('Peef: Its a toy stephascope. Its mostly plastic, but the part that goes on chests is metal.');
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