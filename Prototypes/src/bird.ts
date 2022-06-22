import * as PIXI from "pixi.js";
import { Game } from "./game";
// import { Hero } from "./hero";

export class Bird extends PIXI.AnimatedSprite {
  xspeed = 0
  yspeed = 0
  game: Game;

  constructor(game: Game, textures: PIXI.Texture[]) {
    super(textures);

    this.game = game;
    // this.x = -50;
    // this.y = 50;

    // this.birdSprite = new PIXI.Sprite(game.loader.resources["birdSprite1"].texture)
    // this.birdSprite.scale.set(0.5, 0.5)
    // this.birdSprite.y = 480
    // this.game.pixi.stage.addChild(this.birdSprite)
    
    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    this.animationSpeed = 0.1;
    // this.loop = true
    // this.gotoAndPlay(4)
    this.game.pixi.stage.addChild(this);

    this.play();
  }

  //gets called every frame
  update(delta: number) {
    super.update(delta);
    this.x += this.xspeed
    this.y += this.yspeed
    // this.move(delta);
  }

  //moves gameobject
  // move(delta: number) {
  //   this.x += 1 * delta;
  //   this.y += Math.sin(this.x * 0.03)
  //   if(this.x >= 1300) {
  //     this.x = -50
  //   }
    
  // }
  shoot(){
    console.log("shooooot!")
}
  private onKeyDown(e: KeyboardEvent): void {
    console.log(e.key.toUpperCase())
    switch (e.key.toUpperCase()) {
        case " ":
            this.shoot()
            break;
        case "A":
        case "ARROWLEFT":
            this.xspeed = -7
            break
        case "D":
        case "ARROWRIGHT":
            this.xspeed = 7
            break
        case "W":
        case "ARROWUP":
            this.yspeed = -7
            break
        case "S":
        case "ARROWDOWN":
            this.yspeed = 7
            break
    }
}

private onKeyUp(e: KeyboardEvent): void {
    switch (e.key.toUpperCase()) {
        case " ":
            break;
        case "A":
        case "D":
        case "ARROWLEFT":
        case "ARROWRIGHT":
            this.xspeed = 0
            break
        case "W":
        case "S":
        case "ARROWUP":
        case "ARROWDOWN":
            this.yspeed = 0
            break
    }
}
}



