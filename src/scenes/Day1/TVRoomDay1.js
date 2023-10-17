class TVRoomDay1 extends Phaser.Scene {
    constructor() {
        super('tvRoomDay1');
    }

    preload(){

        this.load.image('tvRoom', "assets/tvRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('couchCushion', "assets/couchCushion.png");
        this.load.image('tvTable', "assets/tvTable.png");
        this.load.image('tvStand', "assets/tvStand.png");
        this.load.image('remote', "assets/remote.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60, startFrame: 0, endFrame: 7});
        this.load.image('greenbu', "assets/greenbu.png");
        this.load.image('greenpa', "assets/greenpa.png");
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
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'tvRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.table = this.physics.add.sprite(704, 679, 'tvTable');
        this.table.body.immovable = true;
        this.table.body.allowGravity = false;
        this.platforms.add(this.table);

        this.tvStand = this.physics.add.sprite(1105, 740, 'tvStand');
        this.tvStand.body.immovable = true;
        this.tvStand.body.allowGravity = false;

        this.cdCase = this.physics.add.sprite(210, 740, 'tvStand');
        this.cdCase.body.immovable = true;
        this.cdCase.body.allowGravity = false;

        this.remote = this.physics.add.sprite(795, 655, 'remote');
        this.remote.body.immovable = true;
        this.remote.body.allowGravity = false;

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');
        
        //this.stiches = this.physics.add.sprite(1400, 730, 'stiches');

        //this.goodLamb = this.physics.add.sprite(1460, 730, 'goodLamb');
        //this.goodLamb.setFlip(true, false);

        this.greenbu = this.physics.add.sprite(650, 635, 'greenbu');
        this.greenbu.body.immovable = true;
        this.greenbu.body.allowGravity = false;

        this.greenpa = this.physics.add.sprite(700, 640, 'greenpa');
        this.greenpa.body.immovable = true;
        this.greenpa.body.allowGravity = false;

        this. talkCount = 0;
        this.finished = false;

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
            this.scene.switch('livingRoomDay1');
        }

        if (this.physics.overlap(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('frontDoorRoomDay1');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyQ)) {
            this.scene.switch('inventoryDay1');
        }

        if (this.talkCount == 2){
            tvQuest = "active";
        }

        if (this.has("batteryOne") && this.has("batteryTwo") && tvQuest == "active"){
            tvQuest = "found";
        }

        if (this.talking == false && this.finished == true){
            tvQuest = "complete";
        }   
        
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log(this.talking);
            
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

        if ((this.physics.overlap(this.p1, this.greenbu) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talkCount = this.talkCount + 1;
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.greenpa) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talkCount = this.talkCount + 1;
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.cdCase) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.tvStand) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }

        if ((this.physics.overlap(this.p1, this.remote) && Phaser.Input.Keyboard.JustDown(this.keyT))) {
            this.talking = !this.talking;
        }


        if (this.talking == true){
            if (this.physics.overlap(this.p1, this.greenbu)) {
                if (tvQuest == "inactive") {
                    this.line1.setText('Peef: Enjoying the show, kids?');
                    this.line2.setText('Greenbu: Oh, hey Peef. Not really. We want to change channel but the remotes not working. I think the batteries are dead.');
                }
                else if (tvQuest == "active"){
                    this.line1.setText('Greenbu: You found batteries yet, Peef? This show is very boring.');
                    this.line2.setText('Peef: Factory documentaries do get boring after a while. Once I find batteries I will be back.');
                }
                else if (tvQuest == "found"){
                    this.line1.setText('Greenbu: Thanks for the batteries, Peef. Now to find some good cartoons.');
                    this.line2.setText('Peef: Have fun. Tell me your recommendations latter.');
                    this.finished = true;
                }
                else if (tvQuest == "complete"){
                    this.line1.setText('Peef: Find any good cartoons, kids?');
                    this.line2.setText('Greenbu: Well, there is plenty of good Spongebob today. Also, the Pokemon show was on. Good stuff.');
                }
            }

            if (this.physics.overlap(this.p1, this.greenpa)) {
                if (tvQuest == "inactive") {
                    this.line1.setText('Greenpa: Of course now the remote breaks. How long are we going to stuck watching factory documentaries.');
                    this.line2.setText('Peef: Calm down, little guy. The remote probably needs fresh batteries again.');
                }
                else if (tvQuest == "active"){
                    this.line1.setText('Greenpa: This show is snooze fest. Why does the TV not have emergency channel nobs.');
                    this.line2.setText('Peef: I do not this counts as an emergency. I will bring batteries once I find them.');
                }
                else if (tvQuest == "found"){
                    this.line1.setText('Peef: We just put these in the remote in just the right way, and its working good as new.');
                    this.line2.setText('Greenpa: Thanks Peef. I just hope these batteries last longer this time.');
                    this.finished = true;
                }
                else if (tvQuest == "complete"){
                    this.line1.setText('Greenpa: While looking around we did find a movie, but it was the one about evil army action figures.');
                    this.line2.setText('Peef: Uhg. Why do so many movies with living toys portray us as evil. At least that flick has good toys as well.');
                }
            }

            if (this.physics.overlap(this.p1, this.cdCase)) {
                this.line1.setText('Peef: Its the DVD cabinet. It has all our movies, most of which are animated.');
                this.line2.setText('');
            }

            if (this.physics.overlap(this.p1, this.tvStand)) {
                this.line1.setText('Peef: Its our TV. You cannot tell from this angle but its actually more modern than it looks.');
                this.line2.setText('Peef: The stand underneath has our game consoles. An NES, SNES, N64, Game Cube, Wii. Hoping to get the next newest console someday.');
            }

            if (this.physics.overlap(this.p1, this.remote)) {
                this.line1.setText('Peef: Its the remote to the TV. We mostly use it to switch between channels with childrens cartoons.');
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