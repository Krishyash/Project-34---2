class plane{

    constructor(x,y,width,height, planePos){

        let options = {
            restitution: 0.8,
            friction: 1,
            density:1,
        }
        this.speed = 0.05
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = w
        this.height = h
        //this.boatPosition = boatPosition
        this.image = loadImage("plane1.png")
        World.add(world,this.body)

    }

    show(){

        let pos = this.body.position
        let index = floor(this.speed%this.animation.length)

        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,this.plane1Position ,this.width,this.height)

        pop()


    }
}