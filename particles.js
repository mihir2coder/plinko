class particle{

    constructor(x,y){
        var o={ friction:0.5, restitution:0.5}
        this.ball=bo.circle(x,y,15,o)
        w.add(wo,this.ball)  
    }

    display(){
        var a=this.ball.position
        ellipseMode(RADIUS)
        fill(random(0,255), random(0,255), random(0,255))
        ellipse(a.x, a.y, 15)
    }
}