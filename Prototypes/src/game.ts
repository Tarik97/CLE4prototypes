import * as PIXI from 'pixi.js'

import { Assets } from "./assets";
import { Bird } from "./bird";
import {Fish} from "./fish"



export class Game{
    pixi: PIXI.Application;
    loader: PIXI.Loader;
    bird: Bird;
    fish : Fish;
    fishes : Fish []


    screenWidth: number = 1280;
    screenHeight: number = 700;

  constructor(){
    this.pixi = new PIXI.Application({ width: 1280, height: 720 })
        document.body.appendChild(this.pixi.view)
    

    this.loader = new PIXI.Loader();
    let assets = new Assets(this);
    this.loader = assets;

  }

  loadCompleted() {
    console.log("Load")
    this.fishes = [];
    const background = new PIXI.Sprite(this.loader.resources["waterImage"].texture!,);
    this.pixi.stage.addChild(background);

   for(let i = 0; i <10; i++){
     
     this.fish = new Fish(this.loader.resources["fishImage"].texture!, this.loader.resources["boneImage"].texture! )
     this.fishes.push(this.fish)
     this.pixi.stage.addChild(this.fishes[i])
   }

    //in frames komen de images te staan die de enemy animate
  

    let birdFrames = this.createBirdFrames();

    this.spawnObjects(birdFrames);
    this.pixi.ticker.add((delta) => this.update(delta));
  }
  spawnObjects(birdFrames: PIXI.Texture[]) {
    

    // nieuwe bird
    this.bird = new Bird(this, birdFrames);

;
  }
  createBirdFrames() {
    let frames: PIXI.Texture[] = [];

    for (let i = 1; i <= 4; i++) {
      const texture = PIXI.Texture.from(`birdSprite${i}.png`);
      frames.push(texture);
    }
    return frames;
  }
  update(delta: number) {
    if (this.bird) {
      this.bird.update(delta);
    }
    for(let f = 0; f < this.fishes.length; f++){
      this.fishes[f].update(delta)
      if(this.collision(this.bird, this.fishes[f])){
          console.log("player touches enemy 💀")
          
          this.fishes[f].boned()
          console.log('Doet het')
      }

  }
  }
  private collision(sprite1:PIXI.Sprite, sprite2:PIXI.Sprite) {
    const bounds1 = sprite1.getBounds()
    const bounds2 = sprite2.getBounds()

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}

}
new Game()


