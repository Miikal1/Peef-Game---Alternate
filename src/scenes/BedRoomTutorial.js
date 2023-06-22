class BedRoomTutorial extends Phaser.Scene {
    constructor() {
        super('bedRoomTutorial');
    }

    preload(){

        this.load.image('bedRoom', "assets/bedRoom.png");
        this.load.image('bedFloor', "assets/bedFloor.png");
        this.load.image('bedBox', "assets/bedBox.png");
        this.load.image('bedTop', "assets/bedTop.png");
        this.load.image('windowSillFront', "assets/windowSillFront.png");
        this.load.image('scally', "assets/scally.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('clearDoor', "assets/clearDoor.png");
        this.load.image('sideDoor', "assets/sideDoor.png");
        this.load.image('testItem', "assets/testItem.png");
        this.load.image('key', "assets/key.png");

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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'bedRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'bedFloor');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.box = this.physics.add.sprite(600, 660, 'bedBox');
        this.box.body.immovable = true;
        this.box.body.allowGravity = false;

        this.bed = this.physics.add.sprite(296, 535, 'bedTop');
        this.bed.body.immovable = true;
        this.bed.body.allowGravity = false;
        this.platforms.add(this.bed);

        this.windowSill = this.physics.add.sprite(1139, 441, 'windowSillFront');
        this.windowSill.body.immovable = true;
        this.windowSill.body.allowGravity = false;
        this.platforms.add(this.windowSill);

        this.doorSide = this.physics.add.sprite(1307, 735, 'sideDoor');
        this.doorSide.body.immovable = true;
        this.doorSide.body.allowGravity = false;

        //this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        //this.doorRight.body.immovable = true;
        //this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.scally = this.physics.add.sprite(120, 498, 'scally');
        this.scally.body.immovable = true;
        this.scally.body.allowGravity = false;

        this.p1 = this.physics.add.sprite(300, 502, 'PeefSide');
        this.p1.setCollideWorldBounds(true);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.box);
        this.physics.add.collider(this.p1, this.platforms);

        this.line1 = this.add.text(880, 790, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
        this.line2 = this.add.text(880, 840, ' ', { font: '20px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
        this.instructions = this.add.text(880, 40, 'Go to the door, Press A and D to move, Press T to interact with the door', { font: '30px Futura', fill: '#FFFFFF' }).setOrigin(0.5);

        this.talking = false;

        this.noteCount = 0;
        this.keyExist = false;

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
    
        if(this.checkCollision(this.p1, this.box) && this.p1.y <= this.box.y && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-520);
            console.log(this.p1.velocityY);
            console.log("3");
        }

        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW) && this.talking == false) {
            this.p1.body.setVelocityY(-500);
        }

        //
        if (askScally == true){
            this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
            this.doorRight.body.immovable = true;
            this.doorRight.body.allowGravity = false;
             if (this.checkCollision(this.p1, this.doorRight)){
                this.p1.x = 1535;
                this.scene.switch('closetTutorial');
            }
        }

        if (this.checkCollision(this.p1, this.doorSide) && Phaser.Input.Keyboard.JustDown(this.keyR) && tutorial == "complete"){
            this.p1.x = 1300;
            this.scene.switch('wayEnd');
        }


        if (this.checkCollision(this.p1, this.doorSide) && Phaser.Input.Keyboard.JustDown(this.keyT) && (tutorial == "inactive" || tutorial == "active")){
            if (tutorial == "inactive" && this.talking == true){
                tutorial = "active";
                triedDoor = true;
            }
            this.talking = !this.talking;
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

        if (this.checkCollision(this.p1, this.scally) && Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.talking = !this.talking;
        }

        if (note == true && this.noteCount < 1){
            this.key = this.physics.add.sprite(100, 730, 'key');
            this.physics.add.collider(this.key, this.ground);
            this.noteCount++;
            this.keyExist = true;
        }

        if (this.keyExist == true){
            if (this.checkCollision(this.p1, this.key) && Phaser.Input.Keyboard.JustDown(this.keyR)){
                inventory.push("key");
                this.key.destroy();
                tutorial = "complete";
                foundKey = true;
            }
        }

        if (this.talking == true){
            if (this.checkCollision(this.p1, this.scally) && tutorial == "inactive") {
                this.line1.setText('Scally: Good Morning, Peef!.');
                this.line2.setText('Peef: Morning Scally. Time to start the day.');
            }

            if (this.checkCollision(this.p1, this.scally) && tutorial == "active") {
                this.line1.setText('Peef: Hey Scally. The bedroom door is locked. Any chance you know where it is');
                this.line2.setText('Scally: Locked. Sorry Peef, I got no clue. But maybe Snow-Wing does. She is to the right, in the closet.');
                if (askScally == false){
                    askScally = true;
                }
            }

            if(this.checkCollision(this.p1, this.doorSide) && tutorial == "inactive"){
                this.line1.setText('Peef: Huh? What the? *repeatedly tries to open the door*');
                this.line2.setText('Peef: The doors locked? Since when do we lock this door? Maybe Scally knows something.');
            }

            if(this.checkCollision(this.p1, this.doorSide) && tutorial == "active"){
                this.line1.setText('Peef: This door to the hall is locked. I guess I need a key.');
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

        if (triedDoor == true){
            this.instructions.setText('Go talk to Scally on the bed, Press W to jump, Press T to talk to characters');
        }

        if (askScally == true){
            this.instructions.setText('The closet is to the right, so just walk there');
        }

        if (note == true){
            this.instructions.setText('The key is over on the left, Press R to pick it up');
        }

        if (foundKey == true){
            this.instructions.setText('You have the key, now to open the door, Press R at the door to go through');
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