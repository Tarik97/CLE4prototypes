import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite{

    deadFish: PIXI.Texture
    alive: boolean

    constructor(texture: PIXI.Texture, deadTexture: PIXI.Texture ){
        super(texture); 
        this.deadFish = deadTexture
        this.tint = Math.random() * 0xFFFFFF;
        this.x = Math.random() * 1000
        this.y = Math.random() * 800

        // this.interactive = true
        // this.buttonMode = true
        // this.on('pointerdown', () => this.boned())
        // this.alive = true

        





    }

    public update(delta: number) {
    
        this.x -= Math.random()* delta 
        if (this.x < - 120){
                    this.x = 1300;
        }

    
    }   
    
    public boned(){

        this.alive = false
        this.texture = this.deadFish
        this.tint = 1 * 0xFFFFFF

    }
            
    
}