class plinko{

    constructor(x,y){
        var o={isStatic:true, friction:0.5, restitution:0.8}
        this.ball=bo.circle(x,y,15,o)
        w.add(wo,this.ball)  
    }

    display(){
        var a=this.ball.position
        ellipseMode(RADIUS)
        fill("white")
        ellipse(a.x, a.y, 15)
    }
}